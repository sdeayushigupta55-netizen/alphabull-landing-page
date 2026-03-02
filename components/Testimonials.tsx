import Card from "@/components/Card";

const items = [
  {
    name: "Amit",
    role: "Working Professional",
    quote:
      "The biggest difference was the risk management. I stopped overtrading and started tracking my performance weekly.",
  },
  {
    name: "Neha",
    role: "Beginner Trader",
    quote:
      "The course is structured. I finally understood market structure and how to plan trades instead of guessing.",
  },
  {
    name: "Rahul",
    role: "Part-time Trader",
    quote:
      "The community and Q&A helped a lot. My execution improved because feedback was fast and practical.",
  },
];

export default function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((t) => (
        <Card key={t.name} className="p-6">
          <p className="text-sm text-white/80">“{t.quote}”</p>
          <div className="mt-5 text-sm font-semibold">{t.name}</div>
          <div className="text-xs text-white/60">{t.role}</div>
        </Card>
      ))}
    </div>
  );
}
