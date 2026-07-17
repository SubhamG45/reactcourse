import { useNavigate } from "react-router-dom";

import {
  Container,
  Glow,
  Glow2,
  Card,
  Illustration,
  Circle,
  Content,
  Badge,
  Title,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "./Notfound.css.jsx";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Glow />
      <Glow2 />

      <Card>
        <Illustration>
          <Circle />
        </Illustration>

        <Content>
          <Badge>404 ERROR</Badge>

          <Title>
            Looks like this page
            <br />
            <span>has gone missing.</span>
          </Title>

          <Description>
            The page you're looking for doesn't exist, may have been moved,
            or the URL might be incorrect. Let's get you back on track.
          </Description>

          <ButtonGroup>
            <PrimaryButton onClick={() => navigate("/")}>
              Go Home
            </PrimaryButton>

            <SecondaryButton onClick={() => navigate(-1)}>
              Go Back
            </SecondaryButton>
          </ButtonGroup>
        </Content>
      </Card>
    </Container>
  );
};

export default NotFound;
