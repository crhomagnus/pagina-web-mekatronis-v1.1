'use client';
import styles from './BrandTicker.module.css';

const BRANDS = [
    { name: 'Schneider Electric', logo: 'https://logo.clearbit.com/schneider-electric.com' },
    { name: 'Bosch Rexroth', logo: 'https://logo.clearbit.com/boschrexroth.com' },
    { name: 'HIWIN', logo: 'https://logo.clearbit.com/hiwin.com' },
    { name: 'Yaskawa', logo: 'https://logo.clearbit.com/yaskawa.com' },
    { name: 'Delta Electronics', logo: 'https://logo.clearbit.com/delta-emea.com' },
    { name: 'WEG', logo: 'https://logo.clearbit.com/weg.net' },
    { name: 'Siemens', logo: 'https://logo.clearbit.com/siemens.com' },
    { name: 'Omron', logo: 'https://logo.clearbit.com/omron.com' },
    { name: 'ABB', logo: 'https://logo.clearbit.com/abb.com' },
    { name: 'Mitsubishi Electric', logo: 'https://logo.clearbit.com/mitsubishielectric.com' },
    { name: 'THK', logo: 'https://logo.clearbit.com/thk.com' },
    { name: 'Festo', logo: 'https://logo.clearbit.com/festo.com' },
];

export default function BrandTicker() {
    // Duplicate the brand list to create seamless infinite loop
    const doubled = [...BRANDS, ...BRANDS];

    return (
        <section className={styles.ticker}>
            <div className="container">
                <p className={styles.label}>Componentes de classe mundial</p>
            </div>
            <div className={styles.track}>
                <div className={styles.slider}>
                    {doubled.map((brand, i) => (
                        <div key={i} className={styles.brandItem}>
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className={styles.brandLogo}
                                loading="lazy"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <span className={styles.brandFallback}>{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
