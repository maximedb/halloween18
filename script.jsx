class Question extends React.Component {
	constructor(props) {
		super(props)
		this.props = props;
		this.answerQuestion = this.answerQuestion.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			proposal: ''
		}
	}
	
	answerQuestion(event) {
		event.preventDefault();
		const { answer } = this.props;
		const { proposal } = this.state;
		if (answer.toLowerCase().trim() == proposal.toLowerCase().trim()) {
			console.log('correct answer');
		} else {
			alert('Wrong answer bitch');
		}
	}
	
	handleChange(event) {
		this.setState({ proposal: event.target.value });
	}
	
	render() {
		const { text, answered, answer } = this.props;
		const { proposal } = this.state;
		if (answered) {
			return (
				<p>{text} - Réponse: {answer}</p>
			);
		} else {
			return (
				<form className="form-inline">
					<div className="form-group">
						<label className="mr-3">{text}</label>
						<input type="text" className="form-control mr-3" value={proposal} onChange={this.handleChange} placeholder="Réponse" />
						<button type="submit" onClick={this.answerQuestion} className="btn btn-primary">Envoyer</button>
					</div>
				</form>
			);
		}
	}
}
		
class QuestionsManager extends React.Component {
	constructor(props) {
		super(props)
		this.props = props;
		this.state = {
			current: 0
		}
	}

	render() {
		const { questions } = this.props;
		const { current } = this.state;
		const questionsDom = questions.map((e, index) => {
			if (index <= current) {
				const answered = current > index ? true : false;
				return <Question key={index} text={e.text} answered={answered} answer={e.answer} />
			}
		})
	}

}

const questions = [
	{
		'id': 0,
	 	'text': '1 + 1',
		'answer': '2'
	},
	{
		'id': 1,
	 	'text': '1 + 2',
		'answer': '3'
	},
	{
		'id': 2,
	 	'text': '1 + 3',
		'answer': '4'
	},
]

ReactDOM.render(
	<QuestionsManager questions={questions}/>,
	document.getElementById('root')
);