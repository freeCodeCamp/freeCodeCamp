# Curriculum File Structure

Our core instructional content is located within the conveniently named `curriculum` directory. This page will break down how these files are organized.

## Terminology

There are a few terms we use when discussing our curriculum content.

- `superBlock` : A superblock is the top level collection of challenges. Each superblock corresponds to a certification in the curriculum (i.e. Responsive Web Design).
- `block` : A block is a section within a superblock. A block corresponds to a group of challenges in a given certification (i.e. Basic HTML and HTML5)
- `challenge` : A challenge is a single lesson within the curriculum (i.e. Say Hello to HTML Elements)

## File Tree

Using those terms, here is how the file structure would be defined:

```md

curriculum/
├─ _meta/
│  ├─ {block}/
│  │  ├─ meta.json
├─ {language}/
│  ├─ {superBlock}/
│  │  ├─ {block}/
│  │  │  ├─ {challenge}.md
```

## The `_meta` directory

The `_meta` directory is a special directory which contains `.json` files. These files correspond to each block in the curriculum, and are used to determine which superBlock a block belongs to, and the order of the challenges within that block.

## Renaming Files

There may be times when you need to rename a superblock, block, or challenge. This section will outline the steps needed to avoid build errors when doing so.

### Renaming a Superblock

coming soon™

### Renaming a Block

When renaming a curriculum block, you need to:

1. Change the name of the block folder in the `english` directory.
2. Change the name of the block folder in *all* of the other language directories to match. These must all be the same as the English structure or the build will error out.
3. Change the name of the block folder in the `_meta` directory. 
4. Update the `dashedName` property for that block's `meta.json` file.

### Renaming a Challenge

When renaming a single challenge file, you need to:

1. Change the name of the challenge file in the `english` directory.
2. Change the name of the challenge file in *all* of the other language directories to match.
3. Change the value of the `dashedName` property in that challenge's frontmatter.
4. Optionally, update the name of the challenge in the relevant `meta.json` file. The challenge names here are not used in the build, but provide a user-friendly way to identify the challenge order.

## The `dashedName` Property

The `dashedName` property is used to generate the URL path for the superblock, block, or challenge. These should generally match what the `/utils/dasherize.js` helper would output for the file name.
