import { useEffect, useState } from "react";
import Counter from "./components/Counter";

// type People = {
//   name: string;
//   age: number;
//   location?: string;
// };
// type Employee = People & {
//   jobTitle: string;
//   degree: string;
// };
interface IPeople {
  name: string;
  age: number;
  location?: string;
}
interface IRelationship {
  wifeName: string;
  childName: string;
}
enum Degree {
  ASSOCIATES = "ASSOCIATES",
  BACHELORS = "BACHELORS",
  MASTERS = "MASTERS",
  DOCTORATE = "DOCTORATE",
  PROFESSIONAL = "PROFESSIONAL",
}
interface IEmployee extends IPeople, IRelationship {
  jobTitle: string;
  degree: Degree;
  // ASSOCIATES
  // BACHELORS
  // MASTERS
  // DOCTORATE
  // PROFESSIONAL
  level?: string | number | Degree;
}
type ApiResponse<DataType> = {
  data: DataType;
  status: "success" | "failed";
};

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [people, setPeople] = useState<IPeople>();
  const useResponse: ApiResponse<{ id: number; name: string }> = {
    data: { id: 1, name: "John" },
    status: "success",
  };
  const bookResponse: ApiResponse<{ id: number; bookName: string }> = {
    data: { id: 1, bookName: "Fullstack" },
    status: "success",
  };

  const employee: IEmployee = {
    name: "Employee ",
    age: 30,
    jobTitle: "Developer",
    degree: Degree.MASTERS, // Neu khong gan gia tri thi se tra ve index trong enum
    wifeName: "Jane",
    childName: "John",
    level: Degree.MASTERS,
  };
  const employee2: typeof employee = {
    name: "Employee2",
    age: 30,
    jobTitle: "Developer",
    degree: Degree.MASTERS, // Neu khong gan gia tri thi se tra ve index trong enum
    wifeName: "Jane",
    childName: "John",
    level: Degree.MASTERS,
  };
  console.log(useResponse);
  console.log(bookResponse);

  console.log(employee2);
  console.log(employee);
  console.log(people);

  const total = (number1: number, number2: number): string => {
    return String(number1 + number2);
  };
  useEffect(() => {
    setPeople({
      name: "John",
      age: 30,
      // location: "USA",
    });
  }, []);
  return (
    <>
      <Counter count={count} setCount={setCount} total={total} />
    </>
  );
}
