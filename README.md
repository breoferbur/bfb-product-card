# BFB-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Breogán Fernández

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'bfb-product-card'
```

```
<ProductCard
    key={product.id}
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {
        ({ count, isMaxCountReached, reset, increaseBy }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
                {/* <button onClick={reset}>Reset</button>
                <button onClick={() => increaseBy(-2)}>-2</button>
                <span>{count}</span>
                {(!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>)} */}
            </>
        )
    }

</ProductCard>
``` 