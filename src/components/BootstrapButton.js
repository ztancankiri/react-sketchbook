import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const BootstrapButton = () => {
	return (
		<Row className="mx-0">
			<Button as={Col} variant="primary">
				Button #zafer
			</Button>
			<Button as={Col} variant="secondary" className="mx-2">
				Button #2
			</Button>
			<Button as={Col} variant="success">
				Button #3
			</Button>
		</Row>
	);
};
