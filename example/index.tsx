import 'react-app-polyfxill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee mug - card!',
  // img: './coffee-mug.png',
}

const App = () => {
  return (
    <div>
      <>
        <ProductCard
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
              </>
            )
          }

        </ProductCard>
      </>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
