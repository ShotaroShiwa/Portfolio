export const designIcons = [
  {
    name: 'Figma', value: 6, lightIcon: '/images/figmaLight.png', darkIcon: '/images/figmaDark.png', text: 'アプリUI設計やWEBサイトデザインをFigmaを活用して行うことができます。\nまた、コンポーネントの作成やオートレイアウトの機能を使い開発フェーズに移行した際に、Figmaファイルを確認しながらスムーズにコーディングが行えるよう意識してデザインします。'
  },
  {
    name: 'Photoshop', value: 3, lightIcon: '/images/photoshopLight.png', darkIcon: '/images/photoshopDark.png', text: 'WEBサイトデザインカンプ制作\n露出補正、色調補正、トリミング、ノイズ除去などのレタッチができます。'
  },
  {
    name: 'illustrator', value: 2, lightIcon: '/images/IllustratorLight.png', darkIcon: '/images/IllustratorDark.png', text: 'プレゼンテーションボードの作成ができます。'
  },
]

export const developmentIcons = [
  {
    name: 'HTML', value: 7, lightIcon: '/images/htmlLight.png', darkIcon: '/images/htmlDark.png', text: '表示対象に沿った最適なタグ付け、汎用性のある記述、分かりやすい名前付けを心掛けています。'
  },
  {
    name: 'CSS', value: 5, lightIcon: '/images/cssLight.png', darkIcon: '/images/cssDark.png', text: 'デザインカンプに基づいたCSSコーディング、レスポンシブ対応、animationを使用して表示対象に動きを付けるコーディングができます。\nまたscssの利用も可能です。'
  },
  {
    name: 'javascript', value: 2, lightIcon: '/images/jsLight.png', darkIcon: '/images/jsDark.png', text: 'Vanilla JSとして意図的な開発経験はあまりないですが、React jQueryの使用により、JavaScript に触れる機会は多いです。'
  },
  { name: 'React', value: 5, lightIcon: '/images/reactLight.png', darkIcon: '/images/reactDark.png', text: 'コンポーネントファイル管理でのフロントエンド実装、map関数を使用したデータ表示、hooksを用いたダーク・ライトモード切り替え機能、モーダルウィンドウの表示等が可能です。このポートフォリオサイトはReactを用いて作成しています。' },
  {
    name: 'PHP', value: 4, lightIcon: '/images/phpLight.png', darkIcon: '/images/phpDark.png', text: '基礎的なCRUD機能、ページ遷移時のデータの受け渡しが可能です。'
  },
  {
    name: 'Laravel', value: 5, lightIcon: '/images/laravelLight.png', darkIcon: '/images/laravelDark.png', text: 'MySQLと連携したCRUD機能、ログイン機能の実装、bladeファイルでの画面実装が可能です。'
  },


]

export const projects = [
  {
    id: 5,
    title: 'Topaz Jade',
    date: '2023.09',
    img: '/images/Thum_TopazJade.png',
    logo: '/images/topazJade_logo.png',
    requester: '自主制作',
    part: 'Planning / Design / Coding （レスポンシブ対応）',
    usedSkill: '使用ツール：Figma / React  / Photoshop   / GitHub ',
    overview: 'ポートフォリオ',
    summary: '今後の活動に先立ち、現時点で私が出来ることをポートフォリオとして表現しました。\nフロントエンドの開発案件に携わりたいと考えているので、実装はReactを用いて制作しました。',
  },
  {
    id: 4,
    title: 'Habit Manager',
    date: '2023.01',
    img: '/images/habitmanager.png',
    logo: '/images/HabitManager_logo.png',
    requester: '自主制作（チーム制作）',
    part: 'Planning / Design / Coding',
    usedSkill: '使用ツール：Figma / Laravel / MySQL / GitHub / Backlog / Googleドキュメント / スプレッドシート ',
    overview: '日常の習慣やToDoを効率的に管理するアプリケーション',
    summary: 'このアプリは、個人の習慣を効率的に登録・管理することを目的としており、公開・非公開の設定も可能となっています。\n公開した習慣は、他のサービス利用者と共有し、MANE（真似）機能を通じてランキング形式で表示されます。\nまた、ユーザー同士のコミュニケーションを促進するチャット機能も搭載しています。\n\n開発は5人チームで行いました',
  },
  {
    id: 3,
    title: 'Dawn SNS',
    date: '2022.08',
    img: '/images/dawnSNS.png',
    logo: '/images/dawnSNS_logo.png',
    requester: '自主制作（学習サイトDAWNによる制作課題）',
    part: 'Coding',
    usedSkill: '使用ツール：Laravel / MySQL / GitHub',
    overview: 'つぶやき型社内コミュニケーションアプリ',
    summary: 'Laravelフレームワークを使用し、個人での開発を行いました。\nこのアプリケーションには、ログイン機能やメッセージのCRUD機能、プロフィール情報の管理などの基本的なSNSの機能が実装されています。データベースとしてMySQLを利用し、コード管理はGitHubを使用しました。',
  },
  {
    id: 2,
    title: '夜明け食堂',
    date: '2022.08',
    img: '/images/dawn-dining.PNG',
    logo: '/images/sabamiso_logo.png',
    requester: '自主制作（学習サイトDAWNによる制作課題）',
    part: 'Coding',
    usedSkill: '使用ツール：PHP',
    overview: '飲食店の予約システム',
    summary: '飲食店の予約を行うためのシステムとして学習用に作成しました。PHPを使用して開発を行い、ユーザーはコースの選択から予約までの手続きを簡単に行うことができます。\n具体的には、コースの選択、人数の指定、氏名やその他のお客様情報の入力、そして最後に内容の確認を行う流れとなっています。',
  },
  {
    id: 1,
    title: 'Dawn macaron',
    date: '2022.04',
    img: '/images/macaron-site.PNG',
    logo: '/images/DAWNmacaron_logo.png',
    requester: '自主制作（学習サイトDAWNによる制作課題）',
    part: 'Coding （レスポンシブ対応）',
    usedSkill: '使用ツール：HTML / CSS / jQuery',
    overview: 'マカロンショップのLPサイト',
    summary: '学習の一環として作成したショップ紹介のLPサイトです。このサイトは、レスポンシブデザインに対応しており、スマートフォンやタブレットからの閲覧も可能です。\nさらに、jqueryを用いて、ハンバーガーメニューやスライダー、モーダルウィンドウ、タブの切り替えなどのインタラクティブな要素を実装しています。',
  },
]



export const readText = [
  '宝石で知られるトパーズとジェード（翡翠）\nトパーズは誠実な関係を築き自身の感性や精神力を高めながら明るい未来へ誘う\nジェードはネガティブなエネルギーから守り、内側から品格を高め周囲の人々に良い影響を与える\n\nこの２つの宝石のようにプラスのエネルギーを、感性・デザイン力・技術力・精神力に変換し高めていくことで自身の進歩をはかり、関わりあるすべてのひとにそれらを還元していきたい'
]

export const profileTexts = [
  '2022年よりWEB業界へ転職\nフロントエンド（HTML, CSS,Javascript）、バックエンド（PHP、Laravel）をメインに学習をしたのち案件移行。\n今後、フロントエンド開発案件に携わりたいと考えているのてReactを学習中。\n平行してデザインの独学を始め、現在はクライアントワークを通じてデザイン力・提案力を日々研鑽している'
]
