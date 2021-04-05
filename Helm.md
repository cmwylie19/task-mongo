# HELM

## Upgrade
```
helm upgrade --values gloo-values.yaml gloo glooe/gloo-ee -n gloo-system 
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
