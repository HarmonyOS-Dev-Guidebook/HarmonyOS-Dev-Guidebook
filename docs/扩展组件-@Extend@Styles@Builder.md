# 扩展组件-@Extend@Styles@Builder.md

## @Builder 构建组件
支持独立文件

```typescript
@Builder
export function hello() {
  Text('Hello World')
}
```

## @Extend 扩展组件



## @Styles 提取共用样式

支持的样式如下

`declare class CommonAttribute extends CommonMethod<CommonAttribute> { }`

```
width
height
drawModifier
customProperty
expandSafeArea
responseRegion
mouseResponseRegion
size
constraintSize
touchable
hitTestBehavior
onChildTouchTest
layoutWeight
padding
margin
background
backgroundColor
pixelRound
backgroundImage
backgroundImageSize
backgroundImagePosition
backgroundBlurStyle
backgroundEffect
backgroundImageResizable
foregroundEffect
visualEffect
backgroundFilter
foregroundFilter
compositingFilter
foregroundBlurStyle
opacity
border
borderStyle
borderWidth
borderColor
borderRadius
borderImage
outline
outlineStyle
outlineWidth
outlineColor
outlineRadius
foregroundColor
onClick
onHover
onAccessibilityHover
hoverEffect
onMouse
onTouch
onKeyEvent
onKeyPreIme
focusable
onFocus
onBlur
tabIndex
defaultFocus
groupDefaultFocus
focusOnTouch
focusBox
focusScopeId
focusScopePriority
animation
transition
transition
gesture
priorityGesture
parallelGesture
blur
linearGradientBlur
motionBlur
brightness
contrast
grayscale
colorBlend
saturate
sepia
invert
systemBarEffect
hueRotate
useShadowBatching
useEffect
backdropBlur
renderGroup
freeze
translate
scale
gridSpan
gridOffset
rotate
transform
onAppear
onDisAppear
onAttach
onDetach
onAreaChange
visibility
flexGrow
flexShrink
flexBasis
alignSelf
displayPriority
zIndex
sharedTransition
direction
align
position
markAnchor
offset
enabled
useSizeType
alignRules
alignRules
chainMode
aspectRatio
clickEffect
onDragStart
onDragEnter
onDragMove
onDragLeave
onDrop
onDragEnd
allowDrop
draggable
dragPreview
dragPreviewOptions
onPreDrag
overlay
linearGradient
sweepGradient
radialGradient
motionPath
shadow
blendMode
clip
clip
clipShape
mask
mask
maskShape
key
id
geometryTransition
geometryTransition
bindPopup
bindMenu
bindMenu
bindContextMenu
bindContextMenu
bindContentCover
bindContentCover
bindSheet
stateStyles
restoreId
onVisibleAreaChange
sphericalEffect
lightUpEffect
pixelStretchEffect
keyboardShortcut
accessibilityGroup
accessibilityText
accessibilityText
accessibilityTextHint
accessibilityDescription
accessibilityDescription
accessibilityLevel
accessibilityVirtualNode
obscured
reuseId
renderFit
attributeModifier
gestureModifier
backgroundBrightness
onGestureJudgeBegin
onGestureRecognizerJudgeBegin
shouldBuiltInRecognizerParallelWith
monopolizeEvents
onTouchIntercept
onSizeChange
```
