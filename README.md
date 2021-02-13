# quiz-client-server

クイズアプリのクラサバ実習を経て、TypeScript を学ぶ教材。  
express の簡易 API サーバーをたて、web client は vanilla で実装する。

出題されるクイズは「択一回答・複数回答・入力回答」の３通りの回答形式が存在し、  
いずれかの形式の Quiz がランダムに出題される。

## 出題意図

- client/server
  - 回答形式が異なる際、スキーマをどう定義すれば型安全に繋がるのか理解する
- server
  - Quiz 型のリファクタでコンパイルエラーが得られることを確認する
  - checkAnswer 関数で、判別共用体の効果を確認する
  - 静的型付けだけでは処理しきれない、レスポンス表現を考察する
- client
  - 回答形式が複数であっても request body を型安全にできるか（判別共用体）
  - DOM Selector の戻り型が nullable であることを理解する（non-null assertion）
  - 非同期処理の推論を理解する（generics）
- 応用編
  - 重複問題が掲示されない様に修正（Server
  - 回答タイムリミットを実装（Front
  - 回答の並び順をランダムソート
  - Quiz の解説機能
