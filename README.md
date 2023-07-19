<br />
<img src=".github/logo.svg?sanitize=true">
<br />
Bringing gesture-based actions to the block editor for a faster authoring experience.
<br /><br />

_Please note, this is a pre-release and requires more testing before a stable release. Contributions and PRs welcome._

## Installation

[WP-CLI](http://wp-cli.org/)

```shell
$ wp plugin install https://github.com/darrenjacoby/gutenberg-gestures/archive/master.zip --activate
```

_Gestures has been submitted to the WordPress plugin directory for review, however at the time of writing there is a 60 day waiting period._

[Composer](https://getcomposer.org/)

```shell
$ composer require darrenjacoby/gutenberg-gestures
```

#### Requirements

- [PHP](http://php.net/manual/en/install.php) >= 7.4.0

## Usage

### Quick Reference

#### Editor

- [Toggle List View](#editor-list-view)
- [Toggle Inserter](#editor-inserter)
- [Toggle Sidebar](#editor-sidebar)

#### Block

- [Move Up](#block-move-up)
- [Move Down](#block-move-down)
- [Duplicate](#block-duplicate)
- [Delete](#block-delete)
- [Insert Before](#block-insert-before)
- [Insert After](#block-insert-after)
- [Lock](#block-lock)
- [Edit as HTML](#block-edit-as-html)

## Editor

### <span id="editor-list-view">Editor/Toggle List View</span>

Action is limited to the left hand side of the editor.

- **`→`** to open.
- **`←`** to close.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/996b63b4-da5a-46f8-99af-30be21020e6f

### <span id="editor-inserter">Editor/Toggle Inserter</span>

Action is limited to the left hand side of the editor. No block must be selected.

- **`cmd/→`** right to open.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/d9113528-613d-44af-a464-a09e12449c06

### <span id="editor-sidebar">Editor/Toggle Sidebar</span>

Action is limited to the right hand side of the editor.

- **`←`** to open.
- **`→`** to close.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/909e1281-6823-4117-9bf8-d99a858dd025

## Block

### <span id="block-move-up">Block/Move Down</span>

- **`↓`** to move block down.

_Supports nested blocks; if the selected block is nested and is the last item, the parent block will move down._

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/0d3af6b2-bab4-4888-b346-0f009b967d82

### <span id="block-move-down">Block/Move Up</span>

- **`↑`** to move block up.

_Supports nested blocks; if the selected block is nested and is the first item, the parent block will move up._

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/f5690b4e-81ce-471e-903c-b1824f05d5cd

### <span id="block-duplicate">Block/Duplicate</span>

- **`cmd/↓`** to duplicate block.
- **`cmd/shift/↓`** to duplicate the parent block of a selected block.

For trackpads and touchscreens;

- **`pinch/outwards`** to duplicate a block.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/0f246202-2967-4efd-b201-d2e86ca1fd2b

### <span id="block-delete">Block/Delete</span>

- **`cmd/↑`** to delete block.

For trackpads and touchscreens;
- **`pinch/inwards`** to delete a block.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/299f9cbf-fe16-46a5-8655-652d3e525be2

### <span id="block-insert-before">Block/Insert Before</span>

- **`cmd/←`** to insert a new block before the selected block.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/1719a0bb-f8fd-450c-b654-d92a80baf75c

### <span id="block-insert-after">Block/Insert After</span>

- **`cmd/→`** to insert a new block before the selected block.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/1851bf15-bb31-4ece-bca2-b4915fa0b19d

### <span id="block-lock">Block/Lock</span>

- **`cmd/shift/←`** to lock the selected block.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/3674a5dd-92a4-4c64-aabe-8355fcc3686a

### <span id="block-edit-as-html">Block/Edit as HTML</span>

- **`cmd/shift/→`** to edit the selected block as HTML.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/27164e4a-be21-4b01-bcb7-97959fec43c5

## Follow along

[Follow along](https://twitter.com/withjacoby) for more block editor experiments.
