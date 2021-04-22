# HELM

## Upgrade
```
helm upgrade --values gloo-values.yaml gloo glooe/gloo-ee -n gloo-system 
```


```
helm upgrade --install -n gloo-system glooe glooe/gloo-ee --version=v1.7.2 --set-string license_key="$(cat ~/Playground/licensing/license.key)"
```



## Upgrade Helm
```
helm upgrade --values gloo-values.yaml dev-portal dev-portal/dev-portal -n dev-portal
```

## Remove Repo
```
helm repo remove stable
```

## List Repos
```
helm repo list
```

## List Releases
```
helm ls -A
```

## Show Chart values
```
helm show values glooe/gloo-ee
```

## Get status of a repo
```
helm status gloo -n gloo-system 
```

## Search a repo
```
helm search repo gloo
```
