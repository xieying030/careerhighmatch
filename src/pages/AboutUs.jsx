export default function AboutUs() {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-xl italic">We’re not building a product — we’re building a purpose.</p>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          在一个喧嚣浮躁的世界里，我们选择坚持一种朴素但强大的信念：每一个愿意创造价值的人，都值得拥有一个真正适合自己的舞台。
        </p>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          我们不是为追逐资本的增长曲线而来，而是为了解决一个真实的社会问题：人才被浪费，机会错位，人与人之间缺乏真实、有效的连接。
        </p>
      </section>

      {/* Vision */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🔭 Our Vision</h2>
        <p className="text-base text-muted-foreground">
          我们致力于重构“人 × 机会”的匹配机制，建立一个价值驱动的连接平台，让每一份才能与每一份心意，都不被辜负。
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>让人才与机会精准匹配，推动资源在市场中的最优配置。</li>
          <li>让想做事的人，不再孤单；让想成事的事，不再难人。</li>
        </ul>
      </section>

      {/* Mission */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🎯 Our Mission</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>连接真正愿意做事的人，而不是仅仅在找工作的人；</li>
          <li>发现有潜力却被忽视的人才，给予他们发挥的平台；</li>
          <li>共建一个基于信任与价值观的生态，而非简历与标签的筛选机制。</li>
        </ul>
        <p className="mt-2 text-muted-foreground">我们用技术连接人，但始终以“人”为核心。我们不打造控制系统，我们打造信任系统。</p>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">❤️ Our Core Values</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li><strong>Value over Vanity：</strong>不追虚名，只以是否真正创造价值为标准</li>
          <li><strong>Long-Termism：</strong>我们只与长期愿意共建的人合作</li>
          <li><strong>Trust First：</strong>信任优于控制，信任是最强的协作引擎</li>
          <li><strong>Authentic Intentions：</strong>我们相信动机纯粹的人力量更大</li>
          <li><strong>No Talent Left Behind：</strong>我们不浪费任何一个愿意投入的人</li>
        </ul>
      </section>

      {/* Action Manifesto */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">⚡ Action Manifesto</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>我们优先寻找价值观契合的伙伴，而不是“背景完美”的人</li>
          <li>我们用行动吸引同行者，而不是用条件吸引“打工人”</li>
          <li>我们拒绝大公司的“内耗式合作”，选择开放、扁平、互信的协作方式</li>
          <li>我们用技术放大人的价值，不是取代人</li>
          <li>我们相信：真正重要的从来不是模板，而是人</li>
        </ul>
      </section>

      {/* Join Us */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🌱 Join Us</h2>
        <p className="text-muted-foreground mb-2">如果你：</p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>想做一些真正有意义的事，</li>
          <li>不甘于被标签定义，</li>
          <li>渴望一个可以托付才华的平台，</li>
          <li>愿意在混乱的现实中寻找理想的秩序，</li>
        </ul>
        <p className="mt-2 text-muted-foreground">那么，欢迎来和我们聊一聊。我们正在寻找愿意一起共建未来的你，无论你是开发者、设计师、研究者，还是热爱构建信任系统的理想主义者。</p>
      </section>

      {/* For Partners & Investors */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">✉️ For Partners & Investors</h2>
        <p className="text-muted-foreground">
          我们不是在做一款工具，而是在打造一个通向未来人才基础设施的入口。我们相信这是一个技术、文化与市场机制三者融合的机会窗口。
        </p>
        <p className="mt-2 text-muted-foreground">
          我们欢迎和你深入探讨我们的技术路径、市场空间和长期愿景。请联系我们，成为推动者，而非旁观者。
        </p>
      </section>
    </div>
  );
}
