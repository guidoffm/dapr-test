# dapr-test

Simple Dapr test with Node-JS client.

Calls the Dapr secrets API.

## Deploy

    az containerapp env dapr-component set \
    -g $RESOURCE_GROUP  \
    --name $CONTAINERAPPS_ENVIRONMENT \
    --dapr-component-name configstore \
    --yaml <(echo componentType: secretstores.local.env\\nversion: v1)
    
    az containerapp create \
    --name daprtest \
    --resource-group $RESOURCE_GROUP \
    --environment $CONTAINERAPPS_ENVIRONMENT \
    --image guidoffm/dapr-test:main \
    --target-port 3000 \
    --ingress 'external' \
    --min-replicas 1 \
    --max-replicas 1 \
    --dapr-app-id daprtest \
    --enable-dapr true \
    --cpu 0.25 \
    --memory 0.5
