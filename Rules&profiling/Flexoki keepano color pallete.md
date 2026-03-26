

## Base color
Flexoki uses warm monochromatic base values that blend the black value with the paper value. 8 values are used in light and dark mode:

3 text values: normal, muted, faint
3 interface values: normal, hover, active
2 background values: primary, secondary
Incremental values can be derived using opacity. For example, you can use a 60% opacity black value on top of the paper value to create the 600 value.

| Color    | Hex     | Light theme | Dark theme |
| -------- | ------- | ----------- | ---------- |
| black    | #100F0F | tx          | bg         |
| base-950 | #1C1B1A |             | bg-2       |
| base-900 | #282726 |             | ui         |
| base-850 | #343331 |             | ui-2       |
| base-800 | #403E3C |             | ui-3       |
| base-700 | #575653 |             | tx-3       |
| base-600 | #6F6E69 | tx-2        |            |
| base-500 | #878580 |             | tx-2       |
| base-300 | #B7B5AC | tx-3        |            |
| base-200 | #CECDC3 | ui-3        | tx         |
| base-150 | #DAD8CE | ui-2        |            |
| base-100 | #E6E4D9 | ui          |            |
| base-50  | #F2F0E5 | bg-2        |            |
| paper    | #FFFCF0 | bg          |            |
## Accent colors

8 accent colors are available for accents and syntax highlighting. Unlike the base values, accent values cannot be derived using opacity because this desaturates the pigment effect. Use the extended palette for the full range of values.

The following 16 values are the main accent values used for syntax highlighting and interface elements like buttons and links. Light themes should use 600 for syntax highlighted text, dark themes should use 400.

| Color       | Hex     | Light theme | Dark theme |
| ----------- | ------- | ----------- | ---------- |
| red-600     | #AF3029 | re          | re-2       |
| orange-600  | #BC5215 | or          | or-2       |
| yellow-600  | #AD8301 | ye          | ye-2       |
| green-600   | #66800B | gr          | gr-2       |
| cyan-600    | #24837B | cy          | cy-2       |
| blue-600    | #205EA6 | bl          | bl-2       |
| purple-600  | #5E409D | pu          | pu-2       |
| magenta-600 | #A02F6F | ma          | ma-2       |

| Color       | Hex     | Light theme | Dark theme |
| ----------- | ------- | ----------- | ---------- |
| red-400     | #D14D41 | re-2        | re         |
| orange-400  | #DA702C | or-2        | or         |
| yellow-400  | #D0A215 | ye-2        | ye         |
| green-400   | #879A39 | gr-2        | gr         |
| cyan-400    | #3AA99F | cy-2        | cy         |
| blue-400    | #4385BE | bl-2        | bl         |
| purple-400  | #8B7EC8 | pu-2        | pu         |
| magenta-400 | #CE5D97 | ma-2        | ma         |

## Mappings
This table describes how to use each variable in the context of user interfaces and syntax highlighting.

| Color   | Variable | UI                   | Syntax highlighting    |
| ------- | -------- | -------------------- | ---------------------- |
| #100F0F | bg       | Main background      |                        |
| #1C1B1A | bg-2     | Secondary background |                        |
| #282726 | ui       | Borders              |                        |
| #343331 | ui-2     | Hovered borders      |                        |
| #403E3C | ui-3     | Active borders       |                        |
| #575653 | tx-3     | Faint text           | Comments               |
| #878580 | tx-2     | Muted text           | Punctuation, operators |
| #CECDC3 | tx       | Primary text         |                        |
| #D14D41 | re       | Error text           | Invalid, imports       |
| #DA702C | or       | Warning text         | Functions              |
| #DA702C | ye       |                      | Constants              |
| #879A39 | gr       | Success text         | Keywords               |
| #3AA99F | cy       | Links, active states | Strings                |
| #4385BE | bl       |                      | Variables, attributes  |
| #8B7EC8 | pu       |                      | Numbers                |
| #CE5D97 | ma       |                      | Language features      |

Attribution stephango.com/flexoki