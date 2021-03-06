import path from 'path';
import React from 'react';
import { ActionBar, Button, Menu, Popover } from '../';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const ActionBarComponent = () => {
    const actionBarBackBtnCode = `<ActionBar>
    <ActionBar.Back onClick={clickBackBtn}/>
    <ActionBar.Header title={'Page Title'} description={'Action Bar Description'} />
    <ActionBar.Actions>
        <Button>Button</Button>
        <Button option="emphasized">Button</Button>
    </ActionBar.Actions>
</ActionBar>

const clickBackBtn = () => {
    alert("You clicked me!");
}`;

    const actionBarNoBackBtnCode = `<ActionBar>
    <ActionBar.Header title={'Page Title'} description={'Action Bar Description'} />
    <ActionBar.Actions>
        <Button>Button</Button>
        <Button option="emphasized">Button</Button>
    </ActionBar.Actions>
</ActionBar>`;

    const actionBarContextualCode = `<ActionBar>
    <ActionBar.Header title={'Page Title'} description={'Action Bar Description'} />
    <ActionBar.Actions>
        <Popover
            control={<Button option="light" glyph="vertical-grip" />}
            body={
                <Menu>
                    <Menu.List>
                        <Menu.Item url="/">Option 1</Menu.Item>
                        <Menu.Item url="/">Option 2</Menu.Item>
                        <Menu.Item url="/">Option 3</Menu.Item>
                        <Menu.Item url="/">Option 4</Menu.Item>
                    </Menu.List>
                </Menu>
            }
        />
    </ActionBar.Actions>
</ActionBar>`;

    const mobileActionBarCode = `<ActionBar mobile={true}>
    <ActionBar.Back />
    <ActionBar.Header title={'Action Bar with description and back button'} />
    <ActionBar.Actions>
        <Popover
            control={<Button option="light" glyph="vertical-grip" />}
            body={
                <Menu>
                    <Menu.List>
                        <Menu.Item url="/">Option 1</Menu.Item>
                        <Menu.Item url="/">Option 2</Menu.Item>
                        <Menu.Item url="/">Option 3</Menu.Item>
                        <Menu.Item url="/">Option 4</Menu.Item>
                    </Menu.List>
                </Menu>
            }
        />
    </ActionBar.Actions>
</ActionBar>`;

    const mobileCustomWidthActionBarCode = `<ActionBar mobile={true} width="768px">
    <ActionBar.Back />
    <ActionBar.Header title={'Action Bar with description and back button'} />
    <ActionBar.Actions>
        <Popover
            control={<Button type="secondary" glyph="vertical-grip" />}
            body={
                <Menu>
                    <Menu.List>
                        <Menu.Item url="/">Option 1</Menu.Item>
                        <Menu.Item url="/">Option 2</Menu.Item>
                        <Menu.Item url="/">Option 3</Menu.Item>
                        <Menu.Item url="/">Option 4</Menu.Item>
                    </Menu.List>
                </Menu>
            }
        />
    </ActionBar.Actions>
</ActionBar>`;

    const clickBackBtn = () => {
        alert('You clicked me!');
    };

    return (
        <div>
            <Header>Action Bar</Header>
            <Description>
                The **Action Bar** is located at the top of the page and is used for page title and main actions for the
                page.
            </Description>
            <Import sourceModulePath={path.join(__dirname, './ActionBar')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, './ActionBar')} />

            <Separator />

            <h2>Action bar with back button, description and action buttons.</h2>
            <DocsTile>
                <ActionBar>
                    <ActionBar.Back onClick={clickBackBtn} />
                    <ActionBar.Header description={'Action Bar Description'} title={'Page Title'} />
                    <ActionBar.Actions>
                        <Button>Button</Button>
                        <Button option='emphasized'>Button</Button>
                    </ActionBar.Actions>
                </ActionBar>
            </DocsTile>
            <DocsText>{actionBarBackBtnCode}</DocsText>

            <Separator />

            <h2>Action bar with no Back button</h2>
            <DocsTile>
                <ActionBar>
                    <ActionBar.Header description={'Action Bar Description'} title={'Page Title'} />
                    <ActionBar.Actions>
                        <Button>Button</Button>
                        <Button option='emphasized'>Button</Button>
                    </ActionBar.Actions>
                </ActionBar>
            </DocsTile>
            <DocsText>{actionBarNoBackBtnCode}</DocsText>

            <Separator />

            <h2>Several Main Actions in a Contextual Menu</h2>
            <Description>
                When there are several main actions for a page, consider displaying them under a contextual menu. This
                allows the user to look in the same position they are used to but avoids cluttering the action bar with
                more than 3-4 actions. This also works well for a responsive/adaptive application.
            </Description>
            <DocsTile>
                <ActionBar>
                    <ActionBar.Header description={'Action Bar Description'} title={'Page Title'} />
                    <ActionBar.Actions>
                        <Popover
                            body={
                                <Menu>
                                    <Menu.List>
                                        <Menu.Item url='/'>Option 1</Menu.Item>
                                        <Menu.Item url='/'>Option 2</Menu.Item>
                                        <Menu.Item url='/'>Option 3</Menu.Item>
                                        <Menu.Item url='/'>Option 4</Menu.Item>
                                    </Menu.List>
                                </Menu>
                            }
                            control={<Button glyph='vertical-grip' option='light' />} />
                    </ActionBar.Actions>
                </ActionBar>
            </DocsTile>
            <DocsText>{actionBarContextualCode}</DocsText>

            <Separator />

            <h2>Action bar mobile view</h2>
            <DocsTile>
                <ActionBar mobile>
                    <ActionBar.Back />
                    <ActionBar.Header
                        description={'Action Bar Description'}
                        title={'Action Bar with description and back button'} />
                    <ActionBar.Actions>
                        <Popover
                            body={
                                <Menu>
                                    <Menu.List>
                                        <Menu.Item url='/'>Option 1</Menu.Item>
                                        <Menu.Item url='/'>Option 2</Menu.Item>
                                        <Menu.Item url='/'>Option 3</Menu.Item>
                                        <Menu.Item url='/'>Option 4</Menu.Item>
                                    </Menu.List>
                                </Menu>
                            }
                            control={<Button glyph='vertical-grip' option='light' />} />
                    </ActionBar.Actions>
                </ActionBar>
            </DocsTile>
            <DocsText>{mobileActionBarCode}</DocsText>

            <Separator />

            <h2>Action bar mobile view with custom width</h2>
            <DocsTile>
                <ActionBar mobile width='768px'>
                    <ActionBar.Back />
                    <ActionBar.Header
                        description={'Action Bar Description'}
                        title={'Action Bar with description and back button'} />
                    <ActionBar.Actions>
                        <Popover
                            body={
                                <Menu>
                                    <Menu.List>
                                        <Menu.Item url='/'>Option 1</Menu.Item>
                                        <Menu.Item url='/'>Option 2</Menu.Item>
                                        <Menu.Item url='/'>Option 3</Menu.Item>
                                        <Menu.Item url='/'>Option 4</Menu.Item>
                                    </Menu.List>
                                </Menu>
                            }
                            control={<Button glyph='vertical-grip' option='light' />} />
                    </ActionBar.Actions>
                </ActionBar>
            </DocsTile>
            <DocsText>{mobileCustomWidthActionBarCode}</DocsText>
        </div>
    );
};
