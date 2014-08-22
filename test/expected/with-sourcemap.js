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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZml4dHVyZXMvd2l0aC1zb3VyY2VtYXAuanMiXSwibmFtZXMiOlsiUGVyc29uIiwiYXNzZXJ0IiwicmVxdWlyZSIsIm5hbWUiLCJhZ2UiLCJkZXNjcmliZSIsImJlZm9yZUVhY2giLCJ0eXBlcyIsInVuZGVmaW5lZCIsIm9iamVjdCIsIk5hTiIsIkluZmluaXR5IiwiaXQiLCJib2IiLCJpbmRleCIsImxlbmd0aCIsIl9leHByIiwiX2NhcHQiLCJjb250ZW50IiwiZmlsZXBhdGgiLCJsaW5lIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxNQUFKLEVBQVlDLE1BQVo7QUFFQUEsTUFBQSxHQUFTQyxPQUFBLENBQVEsY0FBUixDQUFULENBRkE7QUFJQUYsTUFBQSxHQUFVLFlBQVc7QUFBQSxJQUNuQixTQUFTQSxNQUFULENBQWdCRyxJQUFoQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFBQSxRQUN6QixLQUFLRCxJQUFMLEdBQVlBLElBQVosQ0FEeUI7QUFBQSxRQUV6QixLQUFLQyxHQUFMLEdBQVdBLEdBQVgsQ0FGeUI7QUFBQSxLQURSO0FBQUEsSUFNbkIsT0FBT0osTUFBUCxDQU5tQjtBQUFBLENBQVosRUFBVCxDQUpBO0FBY0FLLFFBQUEsQ0FBUyxlQUFULEVBQTBCLFlBQVc7QUFBQSxJQUNuQ0MsVUFBQSxDQUFXLFlBQVc7QUFBQSxRQUNwQixPQUFPLEtBQUtDLEtBQUwsR0FBYTtBQUFBLFlBQ2xCLFFBRGtCO0FBQUEsWUFDUixJQURRO0FBQUEsWUFDRixJQURFO0FBQUEsWUFDSSxLQURKO0FBQUEsWUFDVyxJQURYO0FBQUEsWUFDaUJDLFNBRGpCO0FBQUEsWUFDNEI7QUFBQSxnQkFBQyxRQUFEO0FBQUEsZ0JBQVcsT0FBWDtBQUFBLGFBRDVCO0FBQUEsWUFDaUQsRUFDakVDLE1BQUEsRUFBUSxJQUR5RCxFQURqRDtBQUFBLFlBR2ZDLEdBSGU7QUFBQSxZQUdWQyxRQUhVO0FBQUEsWUFHQSxNQUhBO0FBQUEsWUFHUSxJQUFJWCxNQUFKLENBQVcsT0FBWCxFQUFvQixDQUFwQixDQUhSO0FBQUEsU0FBcEIsQ0FEb0I7QUFBQSxLQUF0QixFQURtQztBQUFBLElBUW5DLE9BQU9ZLEVBQUEsQ0FBRyxNQUFILEVBQVcsWUFBVztBQUFBLFFBQzNCLElBQUlDLEdBQUosRUFBU0MsS0FBVCxDQUQyQjtBQUFBLFFBRTNCQSxLQUFBLEdBQVEsS0FBS1AsS0FBTCxDQUFXUSxNQUFYLEdBQW9CLENBQTVCLENBRjJCO0FBQUEsUUFHM0JGLEdBQUEsR0FBTSxJQUFJYixNQUFKLENBQVcsS0FBWCxFQUFrQixDQUFsQixDQUFOLENBSDJCO0FBQUEsUUFJM0IsT0FBT0MsTUFBQSxDQUFPQSxNQUFBLENBQUFlLEtBQUEsQ0FBQWYsTUFBQSxDQUFBZ0IsS0FBQSxDQUFBaEIsTUFBQSxDQUFBZ0IsS0FBQSxDQUFBaEIsTUFBQSxDQUFBZ0IsS0FBQSxDQUFBaEIsTUFBQSxDQUFBZ0IsS0FBQSxNQUFLVixLQUFMLG9DQUFXTixNQUFBLENBQUFnQixLQUFBLENBQUFILEtBQUEscUNBQVgsOEJBQWtCWCxJQUFsQiwwQkFBMkJGLE1BQUEsQ0FBQWdCLEtBQUEsQ0FBQWhCLE1BQUEsQ0FBQWdCLEtBQUEsQ0FBQUosR0FBQSw4QkFBSVYsSUFBSixzQkFBM0I7QUFBQSxZQUFBZSxPQUFBO0FBQUEsWUFBQUMsUUFBQTtBQUFBLFlBQUFDLElBQUE7QUFBQSxVQUFQLENBQVAsQ0FKMkI7QUFBQSxLQUF0QixDQUFQLENBUm1DO0FBQUEsQ0FBckMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
