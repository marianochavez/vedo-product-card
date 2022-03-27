# vedo-product-card

Paquete de prueba - Despliegue NPM

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'vedo-product-card';
```

```
<ProductCard
    product={product}
    initialValues={{
        quantity: 5,
        maxQuantity: 10,
    }}
>
    {
        ({ counter, increaseBy, reset, isMaxQuantityReached, maxQuantity }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```
