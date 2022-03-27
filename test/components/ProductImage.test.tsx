import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';


describe('ProductImage', () => {
    test('debe mostrar el componente correctamente con la imagen personalizada', () => {
        const wrapper = renderer.create(
            <ProductImage img='https://via.placeholder.com/150' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe mostrar componente correctamente con la imagen de producto 1', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => <ProductImage />
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})