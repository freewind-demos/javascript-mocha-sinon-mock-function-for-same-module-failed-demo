"Sinon" Mock Function in Same Module Failed Demo
================================================

Failed mock a function which is invoked by another function in the same module.

```
npm install
npm test
```

Output:

```
---------- real function: angle ------------
Hello, <<sinon>>!
    1) cannot replace a more indirect function :(


  0 passing (18ms)
  1 failing

  1) sinon
       cannot replace a more indirect function :(:

      AssertionError: expected 'Hello, <<sinon>>!' to equal 'Hello, **** sinon ****!'
      + expected - actual

      -Hello, <<sinon>>!
      +Hello, **** sinon ****!

```

从这里看似乎没有什么好办法：<https://stackoverflow.com/questions/35753797/stub-module-function-called-from-the-same-module>

我能想到的就是，把`angle()`从`hello.js`里抽出去成为一个单独的module，再测应该可以。