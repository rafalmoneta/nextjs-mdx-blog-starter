export default function About(): JSX.Element {
  return (
    <div className="container mx-auto">
      <div className="lg:flex item-center lg:-mx-4">
        <div className="lg:px-4 w-full">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Hi there, I&apos;m your starter!
          </h1>

          <div className="w-full prose text-gray-600 dark:text-gray-400">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
              ante sed arcu porta ultrices. Duis tincidunt venenatis lectus, non
              ornare neque commodo quis. Nullam sit amet laoreet eros. Vivamus
              et ligula in ligula aliquet auctor imperdiet sagittis risus. In
              vehicula massa leo, tincidunt dapibus metus sagittis vitae
            </p>

            <p>
              You can grab me on:{' '}
              <a
                href="https://github.com/rafalmoneta/nextjs-mdx-blog-starter"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                GitHub
              </a>{' '}
              {/* &bull;{' '}
              <a href="#" target="_blank" rel="noreferrer">
                Instagram
              </a>{' '}
              &bull;{' '}
              <a href="#" target="_blank" rel="noreferrer">
                Linkedin
              </a> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
