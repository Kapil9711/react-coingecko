import TableData from "./TableData";

const Main = (props) => {
  const { filteredData, isLoading, isError } = props;

  return (
    <main>
      <Message {...{ isLoading, isError }} />
      <table>
        <tbody>
          {filteredData.map((ele) => (
            <TableData key={ele.id} {...ele} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

const Message = ({ isLoading, isError }) => {
  if (isLoading) {
    return (
      <div className="msg">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="msg">
        <h1>Error in fetching data...</h1>
      </div>
    );
  }
  return null;
};

export default Main;
