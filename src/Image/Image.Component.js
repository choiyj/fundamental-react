import { Image } from '../';
import path from 'path';
import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Playground, Properties, Separator } from '../_playground';

export const ImageComponent = () => {
    const sizesImageCode = `<Image size="s" photo="https://placeimg.com/400/400/nature"></Image>
<Image size="m" photo="https://placeimg.com/400/400/nature"></Image>
<Image size="l" photo="https://placeimg.com/400/400/nature"></Image>`;

    const shapesImageCode = `<Image size="s" type="circle" photo="https://placeimg.com/400/400/nature"></Image>
<Image size="m" type="circle" photo="https://placeimg.com/400/400/nature"></Image>
<Image size="l" type="circle" photo="https://placeimg.com/400/400/nature"></Image>`;
    return (
        <div>
            <Header>Image</Header>
            <Description>
                Use an **Image** component to display images.
            </Description>
            <Import sourceModulePath={path.join(__dirname, './Image')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, './Image')} />

            <Separator />

            <h2>Sizes</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--image'>
                    <Image photo='https://placeimg.com/400/400/nature' size='s' />
                    <Image photo='https://placeimg.com/400/400/nature' size='m' />
                    <Image photo='https://placeimg.com/400/400/nature' size='l' />
                </div>
            </DocsTile>
            <DocsText>{sizesImageCode}</DocsText>

            <Separator />

            <h2>Shapes</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--image'>
                    <Image photo='https://placeimg.com/400/400/nature' size='s'
                        type='circle' />
                    <Image photo='https://placeimg.com/400/400/nature' size='m'
                        type='circle' />
                    <Image photo='https://placeimg.com/400/400/nature' size='l'
                        type='circle' />
                </div>
            </DocsTile>
            <DocsText>{shapesImageCode}</DocsText>

            <Separator />
            <h2>Playground</h2>
            <Playground
                component='image'
                schema={[
                    {
                        attribute: 'size',
                        typeOfAttribute: 'string',
                        'enum': ['s', 'm', 'l']
                    },
                    {
                        attribute: 'photo',
                        typeOfAttribute: 'string'
                    },
                    {
                        attribute: 'type',
                        typeOfAttribute: 'string',
                        'enum': ['', 'circle']
                    }
                ]}>
                <Image photo='https://placeimg.com/400/400/nature' size='s' />
            </Playground>
        </div>
    );
};
