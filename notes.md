**create service account**
`kubectl create serviceaccount finalizers`

**create a role with `rbacdefinitions/finalizers`**
```
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRole
metadata:
   name: finalizers
   namespace: gloo-system
rules:
 - apiGroups: [""]
   resources:
     - rbacdefinitions/finalizers
   verbs:
     - "*"
```

**create rolebinding to bind the `finalizers-role`**  

```
kubectl create clusterrolebinding finalizers --clusterrole=finalizers --serviceaccount=default:finalizers
```

assign service account to the gateway-proxy (or gloo) deploy