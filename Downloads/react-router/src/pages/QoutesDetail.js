import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
const QoutesDetail = () => {
  const param = useParams();
  return (
    <div>
      <h1>This is Quotes</h1>
      <h2>{param.qouteId}</h2>
      <Route path={`/qoute/${param.qouteId}/comment`}>
        <Comments />
      </Route>
    </div>
  );
};
export default QoutesDetail;
