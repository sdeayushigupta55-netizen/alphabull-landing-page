import Button from "@/components/Button";
import Card from "@/components/Card";

const plans = [
  {
    name: "Kickstart Forex",
    price: "₹4,999",
    tag: "Beginner",
    points: [
      "Forex basics + platform setup",
      "Candlesticks + market structure",
      "Risk management foundations",
      "Daily practice plan",
    ],
  },
  {
    name: "Price Action Pro",
    price: "₹14,999",
    tag: "Intermediate",
    featured: true,
    points: [
      "Support/Resistance + supply/demand",
      "Entry models + confirmations",
      "Trading journal + review system",
      "Live Q&A + community",
    ],
  },
  {
    name: "SMC + ICT Toolkit",
    price: "₹29,999",
    tag: "Advanced",
    points: [
      "Liquidity concepts + POI mapping",
      "Session timing + bias building",
      "Trade management + scaling",
      "Weekly mentorship calls",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((p) => (
        <Card
          key={p.name}
          className={`p-6 ${p.featured ? "ring-1 ring-gold-300/40" : ""}`}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="text-lg font-semibold">{p.name}</div>
              <div className="mt-1 text-xs text-white/60">{p.tag}</div>
            </div>
            {p.featured && (
              <div className="rounded-full bg-gold-300/15 px-3 py-1 text-xs text-gold-200">
                Most Popular
              </div>
            )}
          </div>

          <div className="mt-5 text-3xl font-semibold">
            {p.price}
            <span className="text-sm text-white/60"> / one-time</span>
          </div>

          <ul className="mt-5 space-y-2 text-sm text-white/75">
            {p.points.map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold-300" />
                <span>{x}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Button href="/contact" variant={p.featured ? "primary" : "secondary"} className="w-full">
              Enroll / Talk to Us
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
