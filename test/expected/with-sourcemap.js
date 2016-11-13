var _PowerAssertRecorder1 = function () {
    function PowerAssertRecorder() {
        this.captured = [];
    }
    PowerAssertRecorder.prototype._capt = function _capt(value, espath) {
        this.captured.push({
            value: value,
            espath: espath
        });
        return value;
    };
    PowerAssertRecorder.prototype._expr = function _expr(value, source) {
        return {
            powerAssertContext: {
                value: value,
                events: this.captured
            },
            source: source
        };
    };
    return PowerAssertRecorder;
}();
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
        var _rec1 = new _PowerAssertRecorder1();
        var bob, index;
        index = this.types.length - 1;
        bob = new Person('bob', 5);
        return assert(_rec1._expr(_rec1._capt(_rec1._capt(_rec1._capt(_rec1._capt(this.types, 'arguments/0/left/object/object')[_rec1._capt(index, 'arguments/0/left/object/property')], 'arguments/0/left/object').name, 'arguments/0/left') === _rec1._capt(_rec1._capt(bob, 'arguments/0/right/object').name, 'arguments/0/right'), 'arguments/0'), {
            content: 'assert(this.types[index].name === bob.name)',
            filepath: 'coffee_script_test.coffee',
            line: 33
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hYnNvbHV0ZS9wYXRoL3RvL2NvZmZlZV9zY3JpcHRfdGVzdC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxxQkFBQTtBQUFBLGFBQUEsbUJBQUE7QUFBQSxhQUFBLFFBQUE7QUFBQTtBQUFBLElBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsS0FBQSxZQUFBLEtBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQTtBQUFBLGFBQUEsUUFBQSxDQUFBLElBQUE7QUFBQSxZQUFBLEtBQUEsRUFBQSxLQUFBO0FBQUEsWUFBQSxNQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUEsZUFBQSxLQUFBO0FBQUE7QUFBQSxJQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLEtBQUEsWUFBQSxLQUFBLENBQUEsS0FBQSxFQUFBLE1BQUE7QUFBQTtBQUFBLFlBQUEsa0JBQUE7QUFBQSxnQkFBQSxLQUFBLEVBQUEsS0FBQTtBQUFBLGdCQUFBLE1BQUEsT0FBQSxRQUFBO0FBQUE7QUFBQSxZQUFBLE1BQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUEsbUJBQUE7QUFBQTtBQUFBLElBQUEsTUFBQSxFQUFBLE1BQUE7QUFBQSxNQUFBLEdBQVMsT0FBQSxDQUFRLGNBQVIsQ0FBVCxDQUFBO0FBQUEsTUFBQSxHQUFBLFlBQUE7QUFBQSxJQUdlLFNBQUEsTUFBQSxDQUFDLElBQUQsRUFBTyxHQUFQLEVBQUE7QUFBQSxRQUNYLEtBQUMsSUFBRCxHQUFRLElBQVIsQ0FEVztBQUFBLFFBRVgsS0FBQyxHQUFELEdBQU8sR0FBUCxDQUZXO0FBQUEsS0FIZjtBQUFBLGtCQUFBO0FBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxRQUFBLENBT1MsZUFQVCxFQU8wQixZQUFBO0FBQUEsSUFDeEIsVUFBQSxDQUFXLFlBQUE7QUFBQSxlQUNULEtBQUMsS0FBRCxHQUFTO0FBQUEsWUFDUCxRQURPO0FBQUEsWUFFUCxJQUZPO0FBQUEsWUFHUCxJQUhPO0FBQUEsWUFJUCxLQUpPO0FBQUEsWUFLUCxJQUxPO0FBQUEsWUFNUCxTQU5PO0FBQUEsWUFPUDtBQUFBLGdCQUNFLFFBREY7QUFBQSxnQkFFRSxPQUZGO0FBQUEsYUFQTztBQUFBLFlBV1AsRUFDRSxNQUFBLEVBQVEsSUFEVixFQVhPO0FBQUEsWUFjUCxHQWRPO0FBQUEsWUFlUCxRQWZPO0FBQUEsWUFnQlAsTUFoQk87QUFBQSxZQWlCSCxJQUFBLE1BQUEsQ0FBTyxPQUFQLEVBQWdCLENBQWhCLENBakJHO0FBQUEsVUFEQTtBQUFBLEtBQVgsRUFEd0I7QUFBQSxXQXNCeEIsRUFBQSxDQUFHLE1BQUgsRUFBVyxZQUFBO0FBQUEsUUFHRixJQUFBLEtBQUEsT0FBQSxxQkFBQSxHQUhFO0FBQUEsUUFDVCxJQUFBLEdBQUEsRUFBQSxLQUFBLENBRFM7QUFBQSxRQUNULEtBQUEsR0FBUSxLQUFDLEtBQUQsQ0FBTyxNQUFQLEdBQWdCLENBQXhCLENBRFM7QUFBQSxRQUVULEdBQUEsR0FBVSxJQUFBLE1BQUEsQ0FBTyxLQUFQLEVBQWMsQ0FBZCxDQUFWLENBRlM7QUFBQSxlQUdULE1BQUEsQ0FBTyxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLE1BQUMsS0FBRCxvQ0FBQSxLQUFPLENBQUEsS0FBQSxDQUFBLEtBQUEscUNBQVAsOEJBQWMsSUFBZCwwQkFBQSxLQUFzQixDQUFBLEtBQUEsQ0FBdEIsS0FBc0IsQ0FBQSxLQUFBLENBQUEsR0FBQSw4QkFBSSxJQUFKLHNCQUF0QjtBQUFBLFlBQUEsT0FBQTtBQUFBLFlBQUEsUUFBQTtBQUFBLFlBQUEsSUFBQTtBQUFBLFVBQVAsRUFIUztBQUFBLEtBQVgsRUF0QndCO0FBQUEsQ0FQMUIiLCJzb3VyY2VzQ29udGVudCI6WyJhc3NlcnQgPSByZXF1aXJlICdwb3dlci1hc3NlcnQnXG5cbmNsYXNzIFBlcnNvblxuICBjb25zdHJ1Y3RvcjogKG5hbWUsIGFnZSkgLT5cbiAgICBAbmFtZSA9IG5hbWVcbiAgICBAYWdlID0gYWdlXG5cbmRlc2NyaWJlIFwidmFyaW91cyB0eXBlc1wiLCAtPlxuICBiZWZvcmVFYWNoIC0+XG4gICAgQHR5cGVzID0gW1xuICAgICAgXCJzdHJpbmdcIlxuICAgICAgOTguNlxuICAgICAgdHJ1ZVxuICAgICAgZmFsc2VcbiAgICAgIG51bGxcbiAgICAgIGB1bmRlZmluZWRgXG4gICAgICBbXG4gICAgICAgIFwibmVzdGVkXCJcbiAgICAgICAgXCJhcnJheVwiXG4gICAgICBdXG4gICAgICB7XG4gICAgICAgIG9iamVjdDogdHJ1ZVxuICAgICAgfVxuICAgICAgTmFOXG4gICAgICBJbmZpbml0eVxuICAgICAgL15ub3QvXG4gICAgICBuZXcgUGVyc29uKFwiYWxpY2VcIiwgMylcbiAgICBdXG5cbiAgaXQgXCJkZW1vXCIsIC0+XG4gICAgaW5kZXggPSBAdHlwZXMubGVuZ3RoIC0gMVxuICAgIGJvYiA9IG5ldyBQZXJzb24oXCJib2JcIiwgNSlcbiAgICBhc3NlcnQgQHR5cGVzW2luZGV4XS5uYW1lIGlzIGJvYi5uYW1lXG4iXX0=
