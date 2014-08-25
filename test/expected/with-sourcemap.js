var Person, assert;
assert = require('power-assert');
Person = function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}();
describe('various types', function () {
    beforeEach(function () {
        return this.types = [
            'string',
            98.6,
            true,
            false,
            null,
            undefined,
            [
                'nested',
                'array'
            ],
            { object: true },
            NaN,
            Infinity,
            /^not/,
            new Person('alice', 3)
        ];
    });
    return it('demo', function () {
        var bob, index;
        index = this.types.length - 1;
        bob = new Person('bob', 5);
        return assert(assert._expr(assert._capt(assert._capt(assert._capt(assert._capt(this.types, 'arguments/0/left/object/object')[assert._capt(index, 'arguments/0/left/object/property')], 'arguments/0/left/object').name, 'arguments/0/left') === assert._capt(assert._capt(bob, 'arguments/0/right/object').name, 'arguments/0/right'), 'arguments/0'), {
            content: 'assert(this.types[index].name === bob.name)',
            filepath: '/absolute/path/to/coffee_script_test.coffee',
            line: 33
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hYnNvbHV0ZS9wYXRoL3RvL2NvZmZlZV9zY3JpcHRfdGVzdC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxNQUFBLEVBQUEsTUFBQTtBQUFBLE1BQUEsR0FBUyxPQUFBLENBQVEsY0FBUixDQUFULENBQUE7QUFBQSxNQUFBLEdBQUEsWUFBQTtBQUFBLElBR2UsU0FBQSxNQUFBLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBQTtBQUFBLFFBQ1gsS0FBQyxJQUFELEdBQVEsSUFBUixDQURXO0FBQUEsUUFFWCxLQUFDLEdBQUQsR0FBTyxHQUFQLENBRlc7QUFBQSxLQUhmO0FBQUEsa0JBQUE7QUFBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFFBQUEsQ0FPUyxlQVBULEVBTzBCLFlBQUE7QUFBQSxJQUN4QixVQUFBLENBQVcsWUFBQTtBQUFBLGVBQ1QsS0FBQyxLQUFELEdBQVM7QUFBQSxZQUNQLFFBRE87QUFBQSxZQUVQLElBRk87QUFBQSxZQUdQLElBSE87QUFBQSxZQUlQLEtBSk87QUFBQSxZQUtQLElBTE87QUFBQSxZQU1QLFNBTk87QUFBQSxZQU9QO0FBQUEsZ0JBQ0UsUUFERjtBQUFBLGdCQUVFLE9BRkY7QUFBQSxhQVBPO0FBQUEsWUFXUCxFQUNFLE1BQUEsRUFBUSxJQURWLEVBWE87QUFBQSxZQWNQLEdBZE87QUFBQSxZQWVQLFFBZk87QUFBQSxZQWdCUCxNQWhCTztBQUFBLFlBaUJILElBQUEsTUFBQSxDQUFPLE9BQVAsRUFBZ0IsQ0FBaEIsQ0FqQkc7QUFBQSxVQURBO0FBQUEsS0FBWCxFQUR3QjtBQUFBLFdBc0J4QixFQUFBLENBQUcsTUFBSCxFQUFXLFlBQUE7QUFBQSxRQUNULElBQUEsR0FBQSxFQUFBLEtBQUEsQ0FEUztBQUFBLFFBQ1QsS0FBQSxHQUFRLEtBQUMsS0FBRCxDQUFPLE1BQVAsR0FBZ0IsQ0FBeEIsQ0FEUztBQUFBLFFBRVQsR0FBQSxHQUFVLElBQUEsTUFBQSxDQUFPLEtBQVAsRUFBYyxDQUFkLENBQVYsQ0FGUztBQUFBLGVBR1QsTUFBQSxDQUFPLE1BQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLEtBQUEsTUFBQyxLQUFELG9DQUFPLE1BQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxxQ0FBUCw4QkFBYyxJQUFkLDBCQUFzQixNQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSw4QkFBSSxJQUFKLHNCQUF0QjtBQUFBLFlBQUEsT0FBQTtBQUFBLFlBQUEsUUFBQTtBQUFBLFlBQUEsSUFBQTtBQUFBLFVBQVAsRUFIUztBQUFBLEtBQVgsRUF0QndCO0FBQUEsQ0FQMUIiLCJzb3VyY2VzQ29udGVudCI6WyJhc3NlcnQgPSByZXF1aXJlICdwb3dlci1hc3NlcnQnXG5cbmNsYXNzIFBlcnNvblxuICBjb25zdHJ1Y3RvcjogKG5hbWUsIGFnZSkgLT5cbiAgICBAbmFtZSA9IG5hbWVcbiAgICBAYWdlID0gYWdlXG5cbmRlc2NyaWJlIFwidmFyaW91cyB0eXBlc1wiLCAtPlxuICBiZWZvcmVFYWNoIC0+XG4gICAgQHR5cGVzID0gW1xuICAgICAgXCJzdHJpbmdcIlxuICAgICAgOTguNlxuICAgICAgdHJ1ZVxuICAgICAgZmFsc2VcbiAgICAgIG51bGxcbiAgICAgIGB1bmRlZmluZWRgXG4gICAgICBbXG4gICAgICAgIFwibmVzdGVkXCJcbiAgICAgICAgXCJhcnJheVwiXG4gICAgICBdXG4gICAgICB7XG4gICAgICAgIG9iamVjdDogdHJ1ZVxuICAgICAgfVxuICAgICAgTmFOXG4gICAgICBJbmZpbml0eVxuICAgICAgL15ub3QvXG4gICAgICBuZXcgUGVyc29uKFwiYWxpY2VcIiwgMylcbiAgICBdXG5cbiAgaXQgXCJkZW1vXCIsIC0+XG4gICAgaW5kZXggPSBAdHlwZXMubGVuZ3RoIC0gMVxuICAgIGJvYiA9IG5ldyBQZXJzb24oXCJib2JcIiwgNSlcbiAgICBhc3NlcnQgQHR5cGVzW2luZGV4XS5uYW1lIGlzIGJvYi5uYW1lXG4iXX0=
