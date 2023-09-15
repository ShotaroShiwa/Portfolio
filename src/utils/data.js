export const designIcons = [
  {
    name: 'Photoshop', value: 3, img: '/public/Photoshop_icon.png', text: 'WEBサイトデザインカンプ制作\n露出補正、色調補正、トリミング、ノイズ除去などのレタッチができます。'
  },
  {
    name: 'illustrator', value: 2, img: '/public/Illustrator_icon.png', text: '独学で学習中。\n基礎的な加工は可能'
  },
  {
    name: 'figma', value: 6, img: '/public/figma_icon.png', text: 'アプリUI設計、WEBサイトデザインをFigmaを活用して行うことができます。\nコンポーネントの作成、オートレイアウトを使い開発フェーズに移行した際に、Figmaファイルを確認しながらスムーズにコーディングが行えるよう意識してデザインします。'
  },
]

export const developmentIcons = [
  {
    name: 'html', value: 7, img: '/public/html_icon.png', text: '表示対象に沿った最適なタグ付け、汎用性のある記述、分かりやすい名前付けを心掛けている'
  },
  {
    name: 'css', value: 5, img: '/public/css_icon.png', text: 'デザインカンプに基づいたCSSコーディング、scssの利用、\nレスポンシブデザイン、animationの使用が可能。'
  },
  {
    name: 'javascript', value: 2, img: '/public/js_icon.png', text: 'Vanilla JSとして意図的な開発経験はあまりないが、React jQueryの使用により、JavaScript に触れる機会は多い。'
  },
  { name: 'react', value: 5, img: '/public/react_icon.png', text: 'コンポーネントファイル管理でのフロントエンド実装、map関数を使用したデータ表示、hooksを用いたダーク・ライトモード切り替え機能、モーダルウィンドウの表示が可能。' },
  {
    name: 'php', value: 4, img: '/public/php_icon.png', text: 'CRUD機能、ページ遷移時のデータの受け渡しが可能。'
  },
  {
    name: 'laravel', value: 5, img: '/public/laravel_icon.png', text: 'MySQLと連携したCRUD機能、ログイン機能の実装、bladeファイルでの画面実装が可能。'
  },


]

export const projects = [
  {
    id: 5,
    title: 'Topaz Jade',
    date: '2023.09',
    img: '/public/Thum_TopazJade.png',
    logo: '/public/topazJade_logo.png',
    text: '日常の習慣やToDoを効率的に管理するアプリケーション\n\nこのアプリは、個人の習慣を効率的に登録・管理することを目的としており、公開・非公開の設定も可能となっている。公開した習慣は、他のサービス利用者と共有し、MANE（真似）機能を通じてランキング形式での表示される。また、ユーザー同士のコミュニケーションを促進するチャット機能も搭載している。\n開発は5人チームで行い、私が主にFigmaを使用してUI・UXデザインやデータベースの基本設計を担当。\n使用技術としては、Laravel,MySQL, GitHub, Backlogなどを使用。',
    requester: '自主制作',
    part: 'Planning / Design / Coding （レスポンシブ対応）',
    usedSkill: '使用ツール：Figma / React  / Photoshop   / GitHub ',
    overview: 'ポートフォリオ',
    summary: '今後の活動に先立ち、現時点で私が出来ることをポートフォリオとして表現した。\nフロントエンドの開発案件に携わりたいと考えているので、実装はReactを用いて制作した。',
  },
  {
    id: 4,
    title: 'Habit Manager',
    date: '2023.01',
    img: '/public/habitmanager.png',
    logo: '/public/HabitManager_logo.png',
    text: '日常の習慣やToDoを効率的に管理するアプリケーション\n\nこのアプリは、個人の習慣を効率的に登録・管理することを目的としており、公開・非公開の設定も可能となっている。公開した習慣は、他のサービス利用者と共有し、MANE（真似）機能を通じてランキング形式での表示される。また、ユーザー同士のコミュニケーションを促進するチャット機能も搭載している。\n開発は5人チームで行い、私が主にFigmaを使用してUI・UXデザインやデータベースの基本設計を担当。\n使用技術としては、Laravel,MySQL, GitHub, Backlogなどを使用。',
    requester: '自主制作（チーム制作）',
    part: 'Planning / Design / Coding',
    usedSkill: '使用ツール：Figma / Laravel / MySQL / GitHub / Backlog / Googleドキュメント / スプレッドシート ',
    overview: '日常の習慣やToDoを効率的に管理するアプリケーション',
    summary: 'このアプリは、個人の習慣を効率的に登録・管理することを目的としており、公開・非公開の設定も可能となっている。\n公開した習慣は、他のサービス利用者と共有し、MANE（真似）機能を通じてランキング形式で表示される。\nまた、ユーザー同士のコミュニケーションを促進するチャット機能も搭載している。\n\n開発は5人チームで行い、私が主にFigmaを使用してUI・UXデザインやデータベースの基本設計を担当。\n使用技術としては、Laravel,MySQL, GitHub, Backlogなどを使用。',
  },
  {
    id: 3,
    title: 'Dawn SNS',
    date: '2022.08',
    img: '/public/dawnSNS.png',
    logo: '/public/dawnSNS_logo.png',
    text: '学習用として開発したTwitter風のSNSアプリケーション\n\nLaravelフレームワークを使用し、個人での開発を行った。\nこのアプリケーションには、ログイン機能やメッセージのCRUD機能、プロフィール情報の管理などの基本的なSNSの機能が実装されている。データベースとしてMySQLを活用し、コード管理にはGitHubを使用。',
    requester: '自主制作（学習サイトDAWNによる制作課題）',
    part: 'Coding',
    usedSkill: '使用ツール：Laravel / MySQL / GitHub',
    overview: 'つぶやき型社内コミュニケーションアプリ',
    summary: 'Laravelフレームワークを使用し、個人での開発を行った。\nこのアプリケーションには、ログイン機能やメッセージのCRUD機能、プロフィール情報の管理などの基本的なSNSの機能が実装されている。データベースとしてMySQLを活用し、コード管理にはGitHubを使用。',
  },
  {
    id: 2,
    title: '夜明け食堂',
    date: '2022.08',
    img: '/public/dawn-dining.PNG',
    logo: '/public/sabamiso_logo.png',
    text: '飲食店の予約を行うためのシステムとして学習用に作成\n\nPHPを使用して開発を行い、ユーザーはコースの選択から予約までの手続きを簡単に行うことができる。具体的には、コースの選択、人数の指定、氏名やその他のお客様情報の入力、そして最後に内容の確認を行う流れとなっている。',
    requester: '自主制作（学習サイトDAWNによる制作課題）',
    part: 'Coding',
    usedSkill: '使用ツール：PHP',
    overview: '飲食店の予約システム',
    summary: 'PHPを使用して開発を行い、ユーザーはコースの選択から予約までの手続きを簡単に行うことができる。\n具体的には、コースの選択、人数の指定、氏名やその他のお客様情報の入力、そして最後に内容の確認を行う流れとなっている。',
  },
  {
    id: 1,
    title: 'Dawn macaron',
    date: '2022.04',
    img: '/public/macaron-site.PNG',
    logo: '/public/DAWNmacaron_logo.png',
    text: '学習の一環として作成したショップ紹介のLPサイト\n\nこのサイトは、レスポンシブデザインに対応しており、スマートフォンやタブレットからの閲覧も可能。さらに、jqueryを用いて、ハンバーガーメニューやスライダー、モーダルウィンドウ、タブの切り替えなどのインタラクティブな要素を実装している。',
    requester: '自主制作（学習サイトDAWNによる制作課題）',
    part: 'Coding （レスポンシブ対応）',
    usedSkill: '使用ツール：HTML / CSS / jQuery',
    overview: 'マカロンショップのLPサイト',
    summary: 'このサイトは、レスポンシブデザインに対応しており、スマートフォンやタブレットからの閲覧も可能。\nさらに、jqueryを用いて、ハンバーガーメニューやスライダー、モーダルウィンドウ、タブの切り替えなどのインタラクティブな要素を実装している。',
  },
]



export const readText = [
  '宝石で知られるトパーズとジェード（翡翠）\nそれぞれ複数の意味を持ちますが、私はこのように解釈しました\nトパーズ：周囲の人々との誠実な関係性を築き、自身の感性や精神力を高めながら明るい未来へ誘う力をもつ石\nジェード：ネガティブなエネルギーから守り、内側から品格を高め周囲の人々に良い影響を与える石\n\nこれらを踏襲してTopaz Jadeの活動は以下のようになります\n\nTopaz Jade：\n濁りのないプラスのエネルギーを、感性・デザイン力・技術力・精神力に変換し高めていくことで自身の進歩をはかるとともに\n関わりあるすべてのひとにそれらを還元していく'
]

export const profileTexts = [
  '2022年よりWEB業界へ転職\nフロントエンド（HTML, CSS,Javascript）、バックエンド（PHP、Laravel）をメインに学習をしたのち案件移行。\n今後、フロントエンド開発案件に携わりたいと考えているのてReactを学習中。\n平行してデザインの独学を始め、現在はクライアントワークを通じてデザイン力・提案力を日々研鑽している'
]
