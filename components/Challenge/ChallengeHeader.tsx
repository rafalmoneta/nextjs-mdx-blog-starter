export default function ChallengeHeader(): JSX.Element {
  return (
    <div className="container mx-auto">
      <div className="w-full max-w-lg">
        <div>
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            #30 days of code!
          </h1>

          <div className="w-full prose text-gray-600 dark:text-gray-400">
            <p>
              Use this page for whatever challenge you want to start. I used
              this for #30daysOfCode challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
