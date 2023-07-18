<img src=".github/logo.svg?sanitize=true">

Gutenberg gestures is an experimental project aimed at creating a more expressive authoring experience through new gesture-based actions.

Each new gesture is measured for drag velocity, duration and distance to understand intention and ensure that traditional block-based drag gestures remain intact. 

## Installation

[WP-CLI](http://wp-cli.org/)

```shell
$ wp plugin install gutenberg-gestures --activate
```

[Composer](https://getcomposer.org/)

```shell
$ composer require wpackagist-plugin/gutenberg-gestures
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

- **`→`** to open
- **`←`** to close
  - If a block is selected, the drag action will require higher velocity.

https://github.com/darrenjacoby/gutenberg-gestures/assets/15921694/c5937855-902d-44c0-87ee-2eddf4cb8f48

### <span id="editor-inserter">Editor/Toggle Inserter</span>

Action is limited to the left hand side of the editor, and when no block is selected.

- **`cmd/→`** right to open

![Editor/Toggle Inserter](.github/editor-inserter.mp4)

### <span id="editor-sidebar">Editor/Toggle Sidebar</span>

Action is limited to the right hand side of the editor.

- **`→`** to open
- **`←`** to close

![Editor/Toggle Sidebar](.github/editor-sidebar.mp4)

## Selected Block

### <span id="block-move-up">Block/Move Up</span>

- **`↓`** to move block down

![Block/Move Up](.github/block-move-up.mp4)

### <span id="block-move-down">Block/Move Down</span>

- **`↑`** to move block up.

![Block/Move Down](.github/block-move-down.mp4)

### <span id="block-duplicate">Block/Duplicate</span>

- **`cmd/↓`** to duplicate block.

For trackpads and touchscreens;

- **`pinch/outwards`** to duplicate a block.

![Block/Duplicate](.github/block-duplicate.mp4)

### <span id="block-delete">Block/Delete</span>

- **`cmd/↑`** to delete block.

For trackpads and touchscreens;
- **`pinch/inwards`** to delete a block.

![Block/Delete](.github/block-delete.mp4)

### <span id="block-insert-before">Block/Insert Before</span>

- **`cmd/←`** to insert a new block before the selected block.

![Block/Insert Before](.github/block-insert-before.mp4)

### <span id="block-insert-after">Block/Insert After</span>

- **`cmd/→`** to insert a new block before the selected block.

![Block/Insert After](.github/block-insert-after.mp4)

### <span id="block-lock">Block/Lock</span>

- **`cmd/shift/←`** to lock the selected block.

![Block/Lock](.github/block-lock.mp4)
### <span id="block-edit-as-html">Block/Edit as HTML</span>

- **`cmd/shift/→`** to edit the selected block as HTML.

![Block/Edit as HTML](.github/block-edit-as-html.mp4)

## Follow along

[Follow along](https://twitter.com/withjacoby) for more experimental gutenberg projects.
