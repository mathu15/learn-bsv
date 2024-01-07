import CourseComponent from "./(components)/CourseComponent";
import SliderMain from "./(components)/SliderMain";
import getAllCourses from "./actions/getAllCourses";

const images = [
  "https://i.pinimg.com/originals/9e/b9/0e/9eb90ed25f38008dfda7693c00a2facd.jpg",
  "https://i.pinimg.com/originals/61/67/68/6167682ff0710bfad2a2c5a02718a0b4.jpg",
  "https://i.pinimg.com/originals/ee/67/14/ee67140fff32088c77fb0af9ae37163d.jpg",
];

interface HomeProps {
  searchParams: string;
}

export default async function Home({ searchParams }: HomeProps) {
  const courses = await getAllCourses(searchParams);

  return (
    <main className="w-[100%]">
      <SliderMain images={images} />

      <div>
        <div className="flex flex-wrap px-8">
          {courses.map((item: any) => (
            <CourseComponent key={item.id} data={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
