import collaborations from "../data/collaborations"

function CollaborationsMarquee() {
  return (
    <section className="border-y border-white/10 bg-black py-14 overflow-hidden">
      <p className="mb-8 text-center text-xs uppercase tracking-[0.5em] text-neutral-500">
        Selected Collaborations
      </p>

      <div className="marquee-mask relative overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="marquee-content">
              {collaborations.map((item) => (
                <div key={`${groupIndex}-${item}`} className="marquee-item">
                  <span>{item}</span>
                  <span className="marquee-dot">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollaborationsMarquee