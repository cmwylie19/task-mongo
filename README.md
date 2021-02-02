# Task

## Deploy k8s
First deploy mongo
```
kubectl apply -f k8s/mongo.yaml
```

Then after the mongo pods are up and ready deploy the task app
```
kubectl apply -f k8s/task.yaml
```

Enable Strict Validation for Gloo Edge default settings (Optional)
```
k patch settings default -n gloo-system --type merge --patch "$(cat patches/validation-patch.yaml)"
```

Enable Route Replacement Gloo Edge (Optional)
```

kubectl patch settings -n gloo-system default --patch '{"spec": {"gloo": {"invalidConfigPolicy": {"replaceInvalidRoutes": true, "invalidRouteResponseCode": 404, "invalidRouteResponseBody": "Gloo Gateway has invalid configuration. Administrators should run glooctl check to find and fix config errors."}}}}' --type=merge
```

Forward IP Address from Downstream from Envoy Listener
```
kubectl patch -n gloo-system gateway gateway-proxy --type merge --patch "$(cat patches/downstream-ip-patch.yaml)"
```

Forward IP From Loadbalancer
```
kubectl patch -n gloo-system svc gateway-proxy --type merge --patch "$(cat patches/loadbalancer-patch.yaml)" 
```

Access Logs Patch
```
kubectl patch -n gloo-system gateway gateway-proxy --type merge --patch "$(cat patches/accesslogs-patch.yaml)"
```

## Endpoints

Health
```
curl  $(glooctl proxy url)/check/healthz | jq 
```

Create
```
curl -X POST -H "Content-Type: application/json" --data '{"title":"test", "ts":"now"}' $(glooctl proxy url)/tasks/addtask
```

GetTasks
```
curl $(glooctl proxy url)/tasks/gettask | jq .
```

