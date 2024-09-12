# @Reusable 组件重用

## @Reusable 案例

## 1. 什么是 @Reusable 组件重用

`@Reusable` 是一种组件重用的方式，它可以将一个组件的实例保存在一个全局的缓存中，以便在需要的时候重用。

## 2. 为什么要使用 @Reusable 组件重用

在某些场景下，我们可能会频繁地创建和销毁组件实例，这样会导致内存的频繁分配和回收，从而影响应用的性能。而使用 `@Reusable` 可以避免这种情况，它可以将组件实例保存在一个全局的缓存中，以便在需要的时候重用。

## 3. 如何使用 @Reusable 组件重用

要使用 `@Reusable` 组件重用，只需要在组件类上添加 `@Reusable` 注解即可，如下所示：

```typescript
@Reusable
@Component
struct Item {
}
```
