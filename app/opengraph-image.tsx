import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Perplexity Pro Activation Guide';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px',
          background: 'linear-gradient(135deg, #07131f 0%, #0f5f98 45%, #6bd4ff 100%)',
          color: '#f5fbff',
        }}
      >
        <div style={{ display: 'flex', fontSize: 24, fontWeight: 600 }}>AZ Labs Guide</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: '88%' }}>
            Perplexity Pro Activation Guide
          </div>
          <div style={{ display: 'flex', fontSize: 28, lineHeight: 1.35, maxWidth: '78%', color: 'rgba(245,251,255,0.92)' }}>
            Follow the annual billing flow, apply the code, and confirm the total is €0.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 22, color: 'rgba(245,251,255,0.82)' }}>
          Nine-step guide with screenshots and troubleshooting notes.
        </div>
      </div>
    ),
    size,
  );
}
