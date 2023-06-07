export const metadata = {
  title: "Feedback",
  description: "Clients feedbacks",
};

export default async function Feedbacks() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  console.log("data: ", data);

  return (
    <div>
      <h1>Clients feedbacks</h1>
      <div className="reviews">
        {data?.map((feedback) => {
          const { id, name, body } = feedback;
          return (
            <div key={id} className="review">
              {id}
              <p>{name}</p>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
