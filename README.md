# code-standup

Personal code progress notes.

## Code Standup #1

> 12.09.2020

### Issue: add flexible horizontal scroll for desktop and mobile platforms.

### Resources:

- https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585
- https://uxdesign.cc/best-practices-for-horizontal-lists-in-mobile-21480b9b73e5

### Code examples:

```
const ScrollBase = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(
    ${(props: ScrollBaseProps) => props.itemCount},
    calc(
      ${(props: ScrollBaseProps) => props.itemRatio}% -         ${ITEM_WIDTH_REDUCER}px
    )
  );
  grid-template-rows: ${(props: ScrollBaseProps) => props.height}px;
  grid-gap: ${ITEM_MARGIN}px;
`
```

## Code Standup #2

> 19.09.2020

### Issue: customize the scrollbar.

### Resources:

- https://css-tricks.com/practical-css-scroll-snapping

### Code examples:

```
overflow-x: scroll;
&::-webkit-scrollbar {
  width: 16px;
}
&::-webkit-scrollbar-track {
  margin: 16px;
  width: 32px;
}
&::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 16px 16px red;
  border-radius: 16px;
  border: solid 4px transparent;
}
```

For better scroll behavior use CSS property `scroll-snap-type`.

## Code Standup #3

> 26.09.2020

### Issue: increase audio quality, remove stuttering.

### Resources:

- https://stackoverflow.com/questions/25435720/stuttering-robotic-audio-in-wav-recordings-via-web-audio-api

### Code examples:

Need to increase a `bufferSize`.

```
recorder.bufferSize = 16384
```

## Code Standup #4

> 30.09.2020

### Issue: drop cache from `<audio>` tag when src was changed to empty.

### Code examples:

An efficient method is to remove `<audio>` from DOM.

### Issue: simple task queue for a server issues.

### Code examples:

A good lib is [better-queue](https://github.com/diamondio/better-queue).
