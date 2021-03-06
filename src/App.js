import React from "react";
import { Button, Image, Divider, Header, Icon, Grid } from "semantic-ui-react";
import Comments from "./comment.js";

import dolgo from "./dolgo.jpeg";

function App() {
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Image src={dolgo} centered />
        </Grid.Row>
        <Grid.Row>
          <Button
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "0",
            }}
          />
          <Button
            basic
            color="blue"
            content="Share"
            icon="fork"
            label={{
              as: "a",
              basic: true,
              color: "blue",
              pointing: "left",
              content: "0",
            }}
          />
        </Grid.Row>
      </Grid>
      <br />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="comment alternate" />
          댓글을 달아주세요!
        </Header>
      </Divider>

      <Comments />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="smile" />C o n t a c t M e !
        </Header>
      </Divider>
      <br />
      <div>
        <Grid centered>
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="twitter" icon="twitter" />
          <Button circular color="linkedin" icon="linkedin" />
          <Button circular color="google plus" icon="google plus" />
        </Grid>
      </div>
    </div>
  );
}

export default App;
