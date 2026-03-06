export default function StatsSection() {
    const stats = [
        { number: '50+', label: 'Template Siap Pakai' },
        { number: '100%', label: 'Digital & Praktis' },
    ];

    return (
        <section className="stats">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div className="stat-item" key={index}>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
