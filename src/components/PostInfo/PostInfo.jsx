import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo_header">
      <h3 className="PostInfo_title">{post.title}</h3>
      <UserInfo user={post.user} />
    </div>
    <p className="PostInfo_body">{post.body}</p>
    <hr />
    <CommentList comments={post.comments} />
    <b data-cy="NoCommentsMessage">No comments yet</b>
  </div>
);
