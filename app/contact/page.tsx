import Button from "@/components/Button";
import { FadeUp } from "@/components/Motion";
import { Section, SectionHeader } from "@/components/Section";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <Section tone="b">
        <FadeUp>
          <SectionHeader
            kicker="Contact"
            title="Talk to AlphaBull"
            desc="Share your experience level and goal (intraday, swing, forex) — we’ll guide you to the right plan. You can also use the WhatsApp bot (bottom-right)."
          />
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FadeUp>
            <div className="rounded-3xl border border-black/10 bg-white/70 p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold">Quick Connect</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/80">
                Fastest way: WhatsApp us. Or use the form and we’ll get back to
                you within 24 hours.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="https://wa.me/919999999999?text=Hi%20AlphaBull%2C%20I%20want%20to%20learn%20trading%20and%20need%20course%20details."
                  target="_blank"
                  variant="primary"
                >
                  WhatsApp
                </Button>
                <Button
                  href="mailto:support@alphabulltradingacademy.com"
                  variant="secondary"
                >
                  Email
                </Button>
              </div>

              <div className="mt-6 text-sm text-slate-600 dark:text-slate-300/80">
                <div>WhatsApp: +91-99999-99999</div>
                <div className="mt-1">Email: support@alphabulltradingacademy.com</div>
              </div>

              <div className="mt-6 rounded-2xl border border-black/10 bg-black/5 p-4 text-xs text-slate-600 dark:border-white/10 dark:bg-black/20 dark:text-slate-300/70">
                Tip: Replace WhatsApp number inside <code>components/WhatsAppBot.tsx</code>
                and this page.
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.06}>
            <div className="rounded-3xl border border-black/10 bg-white/70 p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold">Enquiry Form</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/80">
                This form posts to <code>/api/contact</code>. You can later connect
                it to email.
              </p>

              <form className="mt-6 space-y-4" action="/api/contact" method="post">
                <div>
                  <label className="text-sm text-slate-700 dark:text-slate-300/80">Name</label>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-gold-500/60 dark:border-white/10 dark:bg-ink-900"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-700 dark:text-slate-300/80">
                    Phone / WhatsApp
                  </label>
                  <input
                    name="phone"
                    required
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-gold-500/60 dark:border-white/10 dark:bg-ink-900"
                    placeholder="+91..."
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-700 dark:text-slate-300/80">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-gold-500/60 dark:border-white/10 dark:bg-ink-900"
                    placeholder="Tell us your experience level and your goal"
                  />
                </div>

                <Button variant="primary" className="w-full">
                  Submit
                </Button>

                <div className="text-xs text-slate-500 dark:text-slate-300/60">
                  Note: This starter logs form data on server. For production,
                  connect to an email service.
                </div>
              </form>
            </div>
          </FadeUp>
        </div>
      </Section>
    </main>
  );
}
