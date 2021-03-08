# Dev Portal

## Install
Add repo with Helm Chart and update the repo contexts
```
helm repo add dev-portal https://storage.googleapis.com/dev-portal-helm
helm repo update
```

Create a Helm value override file:
```
cat << EOF > gloo-values.yaml
gloo:
  enabled: true
licenseKey:
  secretRef:
    name: license
    namespace: gloo-system
    key: license-key
EOF
```

Create the target namespace for the deployment and install the Gloo Portal referencing the overrides file:
```
k create ns dev-portal
helm install dev-portal dev-portal/dev-portal -n dev-portal --values gloo-values.yaml
```