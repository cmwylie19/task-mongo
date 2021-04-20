# Task

[OpenAPI spec](https://gist.githubusercontent.com/cmwylie19/f9a68a6c8b2066bc06c5a2188e4c03c5/raw/0d5d7314e154fd7d1311f9cecb8a444f11bd8887/openapi.yaml)
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
k patch settings default -n gloo-system --type merge --patch "$(cat manifests/patches/validation-patch.yaml)"
```

Enable Route Replacement Gloo Edge (Optional)
```

kubectl patch settings -n gloo-system default --patch '{"spec": {"gloo": {"invalidConfigPolicy": {"replaceInvalidRoutes": true, "invalidRouteResponseCode": 404, "invalidRouteResponseBody": "Gloo Gateway has invalid configuration. Administrators should run glooctl check to find and fix config errors."}}}}' --type=merge
```

Forward IP Address from Downstream from Envoy Listener
```
kubectl patch -n gloo-system gateway gateway-proxy --type merge --patch "$(cat manifests/patches/downstream-ip-patch.yaml)"
```

Forward IP From Loadbalancer
```
kubectl patch -n gloo-system svc gateway-proxy --type merge --patch "$(cat manifests/patches/loadbalancer-patch.yaml)" 
```

Access Logs Patch
```
kubectl patch -n gloo-system gateway gateway-proxy --type merge --patch "$(cat manifests/patches/accesslogs-patch.yaml)"
```

## Endpoints

Health
```
curl  $(glooctl proxy url)/callback | jq 
```

Create
```
curl -X POST -H "Content-Type: application/json" --data '{"title":"test", "ts":"now"}' $(glooctl proxy url)/tasks/addtask
```

GetTasks
```
curl $(glooctl proxy url)/tasks/gettask | jq .
```

UpdateTasks
```
curl -X PUT "Content-Type: application/json" --data '{"_id":"602156048cf503b0611e8d37", "title":"Updated Title"}' $(glooctl proxy url)/tasks/updatetask
```

### Drawing
https://docs.google.com/drawings/d/1hrZytdFghyOOYyfvZGXWqZ5re3tKq-3iaO838I7Khbw/edit


