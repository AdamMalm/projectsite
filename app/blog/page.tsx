import PostCard from "./PostCard";

export default function Blog() {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="pt-10 grid gap-6 grid-cols-2 grid-rows-2">
        <PostCard src="https://source.unsplash.com/random/?programming" />
        <PostCard src="https://source.unsplash.com/random/?frontend" />
        <PostCard src="https://source.unsplash.com/random/?design" />
        <PostCard src="https://source.unsplash.com/random/?IoT" />
        <PostCard src="https://source.unsplash.com/random/?backend" />
        <PostCard src="https://source.unsplash.com/random/?javascript" />
        <PostCard src="https://source.unsplash.com/random/?nextjs" />
      </div>
    </div>
  );
}
