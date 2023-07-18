<br />
<img src=".github/logo.svg?sanitize=true">
<br />
Gestures is an experimental project aimed at creating a more expressive and enjoyable authouring experience within the WordPress Gutenberg editor.

## Installation

[WP-CLI](http://wp-cli.org/)

```shell
$ wp plugin install https://github.com/darrenjacoby/gutenberg-gestures/archive/master.zip --activate
```

_Gestures has been submitted to the WordPress plugin directory for review, however at the time of writing there is a 60 day waiting list._

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

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/c5937855-902d-44c0-87ee-2eddf4cb8f48

### <span id="editor-inserter">Editor/Toggle Inserter</span>

Action is limited to the left hand side of the editor. No block must be selected.

- **`cmd/→`** right to open.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/8fe4368b-3bf3-4358-9471-779cdd5d4770

### <span id="editor-sidebar">Editor/Toggle Sidebar</span>

Action is limited to the right hand side of the editor.

- **`→`** to open.
- **`←`** to close.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/2392e7f1-0e1a-4153-bb71-4439e85f6e8c

## Block

### <span id="block-move-up">Block/Move Down</span>

- **`↓`** to move block down.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/df4ee518-c67d-4bb3-8310-dd3715fc18ea

### <span id="block-move-down">Block/Move Up</span>

- - **`↑`** to move block up.

- https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/4e9f80b3-e6d2-460b-82b3-0ba396a15aaf

### <span id="block-duplicate">Block/Duplicate</span>

- **`cmd/↓`** to duplicate block.

For trackpads and touchscreens;

- **`pinch/outwards`** to duplicate a block.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/dfdd1e76-666e-49ee-99f2-bc9badde3c40

### <span id="block-delete">Block/Delete</span>

- **`cmd/↑`** to delete block.

For trackpads and touchscreens;
- **`pinch/inwards`** to delete a block.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/3d3ecbcb-350b-4b40-aa28-e337f113fa6a

### <span id="block-insert-before">Block/Insert Before</span>

- **`cmd/←`** to insert a new block before the selected block.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/19e61010-0b65-4c57-bc44-cea42750c080

### <span id="block-insert-after">Block/Insert After</span>

- **`cmd/→`** to insert a new block before the selected block.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/a14930af-4777-4bf4-ae73-6ff53c7c2637

### <span id="block-lock">Block/Lock</span>

- **`cmd/shift/←`** to lock the selected block.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/8ef789f1-406f-47ad-ae48-b06715035856

### <span id="block-edit-as-html">Block/Edit as HTML</span>

- **`cmd/shift/→`** to edit the selected block as HTML.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/c676eb22-a1ea-4133-add0-3b0dc191d3c6

## Follow along

[Follow along](https://twitter.com/withjacoby) for more experimental Gutenberg projects.
