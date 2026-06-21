const LINE_URL = "https://lin.ee/pC9uPug";
const INSTAGRAM_URL = "https://www.instagram.com/ryuoh_socceracademy";
const NOTE_URL = "https://note.com/ryuohfc";
const HERO_IMAGE_SRC = "/hero-photo.png?v=20260523";
const CTA_IMAGE_SRC = "/cta-photo.png?v=20260523";

const concerns = [
  "試合に出る機会が少ない",
  "もっと試合で活躍したい",
  "ボールを持つと焦ってしまう",
  "ミスを怖がるようになった",
  "まわりとの差を感じている",
  "自信を持ってプレーしたい",
  "今の自分を変えたい",
  "練習しているのに伸び悩んでいる",
];

const skills = [
  {
    title: "ボールコントロール",
    text: "ボールコントロールレベルを上げて、サッカー選手としての土台を整えます。",
  },
  {
    title: "判断する力",
    text: "ただ指示を待つのではなく、状況を見て、自分で選ぶ力を育てます。",
  },
  {
    title: "チャレンジする心",
    text: "失敗を責めるのではなく、次にどうするかを考える習慣を大切にします。",
  },
  {
    title: "続ける力",
    text: "すぐに結果が出なくても、積み重ねることで成長できる力を育てます。",
  },
];

const overview = [
  {
    label: "対象",
    value: "年長〜高校生",
    note: "初心者・経験者問わず、現在のレベルに合わせて参加できます。",
  },
  {
    label: "月謝",
    value: "3,000円〜",
    note: "学年・参加形態により異なります。詳細はお問い合わせください。",
  },
  {
    label: "活動エリア",
    value: "山口県山陽小野田市・宇部市近郊",
  },
  {
    label: "内容",
    value: "通常練習、技術指導、試合、特別レッスンなど",
  },
  {
    label: "申込方法",
    value: "Instagram DM または LINE",
  },
];

function CtaButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={LINE_URL}
        className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-yellow px-5 py-4 text-center text-base font-bold text-navy shadow-[0_12px_30px_rgba(250,204,21,0.32)] transition hover:-translate-y-0.5 hover:bg-yellow-dark focus:outline-none focus:ring-4 focus:ring-yellow/40 sm:w-auto sm:px-6"
      >
        LINEで体験参加を申し込む
      </a>
      <a
        href={INSTAGRAM_URL}
        className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-4 text-center text-base font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16 focus:outline-none focus:ring-4 focus:ring-white/30 sm:w-auto sm:px-6"
      >
        Instagramで相談する
      </a>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-gold">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.22),transparent_30%),linear-gradient(140deg,#071a37_0%,#0b2a55_52%,#0f3f75_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.08))]" />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-10 lg:py-16">
          <div>
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold leading-relaxed text-white/92 sm:mb-7 sm:px-4 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-yellow" />
              山陽小野田市・宇部市近郊のサッカーアカデミー
            </div>

            <h1 className="text-[2.08rem] font-black leading-[1.16] tracking-normal sm:text-5xl lg:text-6xl">
              今の自分を変えたい君へ。
              <br />
              竜王で、サッカーの土台を磨こう。
            </h1>

            <p className="mt-5 text-lg font-bold leading-relaxed text-white sm:mt-6 sm:text-2xl">
              ボールコントロールを高め、
              <br />
              自分で考え、自分で動ける選手へ。
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/82 sm:mt-7 sm:text-lg sm:leading-8">
              竜王FCサッカーアカデミーは、山陽小野田市・宇部市近郊で活動するサッカーアカデミーです。
              もっと活躍したい、自信をつけたい、今の自分を変えたい。
              そんな子どもたちが、ボールコントロールを土台に、自分で考えて動ける選手へ成長するための場所です。
            </p>

            <div className="mt-8">
              <CtaButtons />
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/16 bg-deep shadow-2xl sm:aspect-square sm:max-w-[500px] sm:rounded-[28px] lg:mr-0">
            <img
              src={HERO_IMAGE_SRC}
              alt="竜王FCサッカーアカデミーの練習風景"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,55,0.08),rgba(7,26,55,0.62))]" />
            <div className="absolute left-4 top-4 rounded-full bg-yellow px-3 py-2 text-xs font-black text-navy shadow-lg sm:left-6 sm:top-6 sm:px-4 sm:text-sm">
              体験参加受付中
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 p-4 text-navy shadow-xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <p className="text-xs font-bold text-navy/70 sm:text-sm">RYUOH FC SOCCER ACADEMY</p>
              <p className="mt-2 text-xl font-black leading-tight sm:text-2xl">
                悔しさを、次の一歩に。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Problem</SectionLabel>
          <h2 className="text-[1.9rem] font-black leading-tight text-navy sm:text-4xl">
            こんなお悩みありませんか？
          </h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {concerns.map((concern) => (
              <div
                key={concern}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow text-sm font-black text-navy">
                  ✓
                </span>
                <p className="text-lg font-bold leading-relaxed">{concern}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-lg bg-navy px-5 py-5 text-xl font-black leading-relaxed text-white sm:text-2xl">
            その悔しさは、変わるための大切な入口です。
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <SectionLabel>Philosophy</SectionLabel>
            <h2 className="text-[1.9rem] font-black leading-tight text-navy sm:text-4xl">
              竜王FCアカデミーの考え方
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-slate-700">
            <p>
              子どもには、それぞれ成長のタイミングがあります。
              今のレベルや経験だけで、これからの可能性が決まるわけではありません。
            </p>
            <p className="text-xl font-black leading-relaxed text-navy">
              大切なのは、何が足りないのかに気づき、正しい方向で継続すること。
            </p>
            <p>
              竜王FCサッカーアカデミーでは、一人ひとりのレベルに合わせて、ボールコントロール・身体の使い方・判断力を丁寧に積み上げていきます。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-14 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Independence</SectionLabel>
          <h2 className="text-[1.9rem] font-black leading-tight sm:text-4xl">
            目指すのは、自立・自走できる選手
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-9 text-white/84">
            <p>
              試合に出ることはゴールのひとつ。でも、本当の目的はその先にあります。
            </p>
            <p>
              竜王FCアカデミーが大切にしているのは、言われたことだけをこなす選手を育てることではありません。
            </p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["自分で考える", "自分で準備する", "自分で判断する", "自分で行動する"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/14 bg-white/8 p-5 text-xl font-black"
                >
                  {item}
                </div>
              ),
            )}
          </div>
          <p className="mt-8 text-lg leading-9 text-white/84">
            失敗しても、なぜ失敗したのかを考え、もう一度チャレンジする。
            サッカーを通じて、子どもたちが自立し、自走できる力を育てていきます。
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Growth</SectionLabel>
          <h2 className="text-[1.9rem] font-black leading-tight text-navy sm:text-4xl">
            竜王で身につくこと
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <article
                key={skill.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg font-black text-yellow">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-black text-navy">{skill.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-700">{skill.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <SectionLabel>For Players</SectionLabel>
            <h2 className="text-[1.9rem] font-black leading-tight text-navy sm:text-4xl">
              こんな子に来てほしい
            </h2>
            <div className="mt-7 space-y-3 text-xl font-black leading-relaxed text-navy">
              <p>試合に出たい。</p>
              <p>もっと活躍したい。</p>
              <p>もっとボールに関わりたい。</p>
              <p>自信を持ってプレーしたい。</p>
              <p>今の自分を変えたい。</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="text-xl font-black leading-relaxed text-navy">
              その気持ちがあるなら、今の実力は関係ありません。
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-700">
              竜王FCアカデミーは、最初から上手な子だけを集める場所ではなく、もっと上手くなりたい子、活躍したい子、これから変わりたい子が成長する場所です。
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Information</SectionLabel>
          <h2 className="text-[1.9rem] font-black leading-tight text-navy sm:text-4xl">
            活動概要
          </h2>
          <dl className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-lg border border-slate-200 bg-white">
            {overview.map((item) => (
              <div key={item.label} className="grid gap-2 p-5 sm:grid-cols-[160px_1fr] sm:p-6">
                <dt className="font-black text-navy">{item.label}</dt>
                <dd className="text-lg leading-relaxed text-slate-700">
                  <p className="font-bold text-slate-900">{item.value}</p>
                  {item.note ? <p className="mt-1 text-base">{item.note}</p> : null}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-7 rounded-lg bg-yellow-soft p-6 text-navy sm:p-8">
            <p className="text-xl font-black leading-relaxed">
              月1回、檜垣裕志コーチによる特別レッスンも開催。
            </p>
            <p className="mt-3 text-lg leading-8 text-navy/78">
              自分に足りない部分に気づき、成長につなげる機会を大切にしています。
            </p>
          </div>
          <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-gold">
              note
            </p>
            <h3 className="mt-3 text-2xl font-black leading-tight text-navy">
              活動の様子や考え方を発信しています
            </h3>
            <p className="mt-3 text-lg leading-8 text-slate-700">
              日々の活動、選手の成長、アカデミーで大切にしていることをnoteでもお届けします。
            </p>
            <a
              href={NOTE_URL}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-navy/15 bg-navy px-5 py-3 text-center text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-deep focus:outline-none focus:ring-4 focus:ring-navy/20 sm:w-auto"
            >
              noteで情報を見る
            </a>
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-14 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-white/14 bg-white/8 shadow-2xl">
            <img
              src={CTA_IMAGE_SRC}
              alt="竜王FCサッカーアカデミーの体験参加イメージ"
              className="h-[280px] w-full object-cover object-center sm:h-[360px]"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl text-center">
          <SectionLabel>Trial</SectionLabel>
          <h2 className="text-[2.1rem] font-black leading-tight sm:text-5xl">
            体験参加受付中
          </h2>
          <p className="mt-5 text-xl font-black leading-relaxed text-yellow">
            今の自分を変えたいなら、一度来てみてください。
          </p>
          <div className="mx-auto mt-7 max-w-[36rem] space-y-3 text-base leading-8 text-white/84 sm:text-lg sm:leading-9">
            <p>
              見学だけでも大丈夫です。
              <br className="hidden sm:block" />
              まずは、今のお子さまの様子や悩みを聞かせてください。
            </p>
            <p>
              無理な勧誘はしません。
              <br className="hidden sm:block" />
              実際の雰囲気を見て、合うかどうかを判断してください。
            </p>
          </div>
          <div className="mt-9 flex justify-center">
            <CtaButtons />
          </div>
        </div>
      </section>
    </main>
  );
}
