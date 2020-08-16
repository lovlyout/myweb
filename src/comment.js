import React from "react";
import { Icon, Comment, Form, Button, Header } from "semantic-ui-react";

import human from "./human.png";

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
    };
  }

  render() {
    console.log(this.state.inputContent)
    return (
      <Comment.Group style={{ marginLeft: "300px" }}>
        <Header as="h3" dividing>
          Comments
        </Header>

        <Comment>
          <Comment.Avatar src={human} />
          <Comment.Content>
            <Comment.Author as="a">Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Form.TextArea
            value={this.state.inputContent}
            placeholder="댓글을 입력하세요"
            onChange={(e) => this.setState({ inputContent: e.target.value })}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick = {() => alert(this.state.inputContent)}
          />
        </Form>
      </Comment.Group>
    );
  }
}

export default Comments;
