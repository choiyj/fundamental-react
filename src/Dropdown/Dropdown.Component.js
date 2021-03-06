import path from 'path';
import React from 'react';
import { Button, Dropdown, Menu, Popover } from '../';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const DropdownComponent = () => {
    const defaultDropdownCode = `<Dropdown>
    <Popover
        id="jhqD0555"
        control={<Button dropdown>Select</Button>}
        noArrow
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
</Dropdown>

<Dropdown>
    <Popover
        id="jhqD0556"
        control={
            <Button dropdown compact>
                Select
            </Button>
        }
        noArrow
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
</Dropdown>`;

    const iconDropdownCode = `<Dropdown>
    <Popover
        id="jhqD0557"
        control={
            <Button dropdown glyph="filter">
                Select
            </Button>
        }
        noArrow
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
</Dropdown>

<Dropdown>
    <Popover
        id="jhqD0558"
        control={
            <Button dropdown compact glyph="filter">
                Select
            </Button>
        }
        noArrow
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
</Dropdown>`;

    const toolbarDropdownCode = `<Dropdown standard>
    <Popover
        id="jhqD0559"
        control={
            <Button dropdown type="standard">
                Select
            </Button>
        }
        noArrow
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
</Dropdown>

<Dropdown standard>
    <Popover
        id="jhqD0560"
        control={
            <Button dropdown compact type="standard">
                Select
            </Button>
        }
        noArrow
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
</Dropdown>`;

    const disabledDropdownCode = `<Dropdown>
    <Popover
        id="jhqD0561"
        disabled
        control={
            <Button dropdown glyph="filter" disabled>
                Select
            </Button>
        }
        noArrow
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
</Dropdown>`;

    return (
        <div>
            <Header>Dropdown</Header>
            <Description>
                The **Dropdown** component lets the user select one of the different options.
                It is more flexible than the normal Select.
            </Description>
            <Import sourceModulePath={path.join(__dirname, './Dropdown')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, './Dropdown')} />

            <Separator />

            <h2>Default Dropdown</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--dropdown'>
                    <Dropdown>
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
                            control={<Button dropdown>Select</Button>}
                            id='jhqD0555'
                            noArrow />
                    </Dropdown>

                    <Dropdown>
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
                            control={
                                <Button compact dropdown>
                                    Select
                                </Button>
                            }
                            id='jhqD0556'
                            noArrow />
                    </Dropdown>
                </div>
            </DocsTile>
            <DocsText>{defaultDropdownCode}</DocsText>

            <Separator />

            <h2>Dropdown with Icon</h2>
            <Description>It can also include complementary information like an icon.</Description>
            <DocsTile centered>
                <div className='fd-doc__margin--dropdown'>
                    <Dropdown>
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
                            control={
                                <Button dropdown glyph='filter'>
                                    Select
                                </Button>
                            }
                            id='jhqD0557'
                            noArrow />
                    </Dropdown>

                    <Dropdown>
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
                            control={
                                <Button compact dropdown
                                    glyph='filter'>
                                    Select
                                </Button>
                            }
                            id='jhqD0558'
                            noArrow />
                    </Dropdown>
                </div>
            </DocsTile>
            <DocsText>{iconDropdownCode}</DocsText>

            <Separator />

            <h2>Toolbar Dropdown</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--dropdown'>
                    <Dropdown standard>
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
                            control={
                                <Button dropdown type='standard'>
                                    Select
                                </Button>
                            }
                            id='jhqD0559'
                            noArrow />
                    </Dropdown>

                    <Dropdown standard>
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
                            control={
                                <Button compact dropdown
                                    type='standard'>
                                    Select
                                </Button>
                            }
                            id='jhqD0560'
                            noArrow />
                    </Dropdown>
                </div>
            </DocsTile>
            <DocsText>{toolbarDropdownCode}</DocsText>

            <Separator />

            <h2>Disabled State</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--dropdown'>
                    <Dropdown>
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
                            control={
                                <Button disabled dropdown
                                    glyph='filter'>
                                    Select
                                </Button>
                            }
                            disabled
                            id='jhqD0561'
                            noArrow />
                    </Dropdown>
                </div>
            </DocsTile>
            <DocsText>{disabledDropdownCode}</DocsText>
        </div>
    );
};
