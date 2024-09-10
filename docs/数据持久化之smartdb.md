# 数据持久化之smartdb

[OpenHarmony三方库中心仓: smartdb](https://ohpm.openharmony.cn/#/cn/detail/@liushengyi%2Fsmartdb)

## 特点

1. 自己写sql语句，非常灵活，非常容易扩展
2. 支持事务
3. 可以理解为MyBatis

## 数据库返回的数据类型

```typescript
interface ResultSet {
    getString(columnIndex: number): string;
    getDouble(columnIndex: number): number;
    getLong(columnIndex: number): number;
    getBlob(columnIndex: number): Uint8Array;
}
```
可以看书，返回的数据不可能出现null，或者undefined，所以可以直接使用，如果数据库不存在，会返回0

默认值
1. Text: ""
2. Integer: 0
3. Float: 0.0
4. Bool: false

```typescript
switch (columnType) {
    case ColumnType.TEXT:
        entry[columnName] = resultSet.getString(resultSet.getColumnIndex(columnName))
        break
    case ColumnType.INTEGER:
        entry[columnName] = resultSet.getLong(resultSet.getColumnIndex(columnName))
        break
    case ColumnType.FLOAT:
        entry[columnName] = resultSet.getDouble(resultSet.getColumnIndex(columnName))
        break
    case ColumnType.BOOL:
        entry[columnName] = resultSet.getDouble(resultSet.getColumnIndex(columnName)) ? true : false
        break
    case ColumnType.BLOB:
        entry[columnName] = resultSet.getBlob(resultSet.getColumnIndex(columnName))
        break
}
```

## 利用AI帮忙生成SQL

