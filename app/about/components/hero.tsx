import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="py-40 flex items-center">
      <div className="container">
        <h1 className="font-bold text-primary/50 text-4xl lg:text-6xl">hero</h1>
        <p className="text-muted-foreground mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est
          nihil sapiente repellat cupiditate deleniti, necessitatibus,
          laudantium nemo quo, in atque quas perspiciatis dolore neque
          laboriosam accusamus maiores maxime quam.
        </p>
        <Button>お問い合わせ</Button>
      </div>
    </div>
  );
}
