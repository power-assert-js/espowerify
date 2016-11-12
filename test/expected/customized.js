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
var _rec1 = new _PowerAssertRecorder1();
var _rec2 = new _PowerAssertRecorder1();
var _rec3 = new _PowerAssertRecorder1();
var _rec4 = new _PowerAssertRecorder1();
var empower = require('empower'), formatter = require('power-assert-formatter'), busterAssertions = require('buster-assertions'), refute = empower(busterAssertions.refute, formatter(), {
        targetMethods: {
            oneArg: ['isNull'],
            twoArgs: ['same']
        }
    }), truthy = 'true', falsy = 'false';
refute(_rec1._expr(_rec1._capt(truthy, 'arguments/0'), {
    content: 'refute(truthy)',
    filepath: 'test/fixtures/customized.js',
    line: 7
}));
refute.isNull(_rec2._expr(_rec2._capt(falsy, 'arguments/0'), {
    content: 'refute.isNull(falsy)',
    filepath: 'test/fixtures/customized.js',
    line: 8
}));
refute.same(_rec3._expr(_rec3._capt(truthy, 'arguments/0'), {
    content: 'refute.same(truthy, falsy)',
    filepath: 'test/fixtures/customized.js',
    line: 9
}), _rec4._expr(_rec4._capt(falsy, 'arguments/1'), {
    content: 'refute.same(truthy, falsy)',
    filepath: 'test/fixtures/customized.js',
    line: 9
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZml4dHVyZXMvY3VzdG9taXplZC5qcyJdLCJuYW1lcyI6WyJfUG93ZXJBc3NlcnRSZWNvcmRlcjEiLCJQb3dlckFzc2VydFJlY29yZGVyIiwiY2FwdHVyZWQiLCJwcm90b3R5cGUiLCJfY2FwdCIsInZhbHVlIiwiZXNwYXRoIiwicHVzaCIsIl9leHByIiwic291cmNlIiwicG93ZXJBc3NlcnRDb250ZXh0IiwiZXZlbnRzIiwiX3JlYzEiLCJfcmVjMiIsIl9yZWMzIiwiX3JlYzQiLCJlbXBvd2VyIiwicmVxdWlyZSIsImZvcm1hdHRlciIsImJ1c3RlckFzc2VydGlvbnMiLCJyZWZ1dGUiLCJ0YXJnZXRNZXRob2RzIiwib25lQXJnIiwidHdvQXJncyIsInRydXRoeSIsImZhbHN5IiwiY29udGVudCIsImZpbGVwYXRoIiwibGluZSIsImlzTnVsbCIsInNhbWUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUFBLHFCQUFBO0FBQUEsYUFBQUMsbUJBQUE7QUFBQSxhQUFBQyxRQUFBO0FBQUE7QUFBQSxJQUFBRCxtQkFBQSxDQUFBRSxTQUFBLENBQUFDLEtBQUEsWUFBQUEsS0FBQSxDQUFBQyxLQUFBLEVBQUFDLE1BQUE7QUFBQSxhQUFBSixRQUFBLENBQUFLLElBQUE7QUFBQSxZQUFBRixLQUFBLEVBQUFBLEtBQUE7QUFBQSxZQUFBQyxNQUFBLEVBQUFBLE1BQUE7QUFBQTtBQUFBLGVBQUFELEtBQUE7QUFBQTtBQUFBLElBQUFKLG1CQUFBLENBQUFFLFNBQUEsQ0FBQUssS0FBQSxZQUFBQSxLQUFBLENBQUFILEtBQUEsRUFBQUksTUFBQTtBQUFBO0FBQUEsWUFBQUMsa0JBQUE7QUFBQSxnQkFBQUwsS0FBQSxFQUFBQSxLQUFBO0FBQUEsZ0JBQUFNLE1BQUEsT0FBQVQsUUFBQTtBQUFBO0FBQUEsWUFBQU8sTUFBQSxFQUFBQSxNQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUFSLG1CQUFBO0FBQUE7QUFNTyxJQUFBVyxLQUFBLE9BQUFaLHFCQUFBLEdBTlA7QUFPYyxJQUFBYSxLQUFBLE9BQUFiLHFCQUFBLEdBUGQ7QUFRWSxJQUFBYyxLQUFBLE9BQUFkLHFCQUFBLEdBUlo7QUFRb0IsSUFBQWUsS0FBQSxPQUFBZixxQkFBQSxHQVJwQjtBQUFBLElBQUlnQixPQUFBLEdBQVVDLE9BQUEsQ0FBUSxTQUFSLENBQWQsRUFDSUMsU0FBQSxHQUFZRCxPQUFBLENBQVEsd0JBQVIsQ0FEaEIsRUFFSUUsZ0JBQUEsR0FBbUJGLE9BQUEsQ0FBUSxtQkFBUixDQUZ2QixFQUdJRyxNQUFBLEdBQVNKLE9BQUEsQ0FBUUcsZ0JBQUEsQ0FBaUJDLE1BQXpCLEVBQWlDRixTQUFBLEVBQWpDLEVBQThDO0FBQUEsUUFBRUcsYUFBQSxFQUFlO0FBQUEsWUFBRUMsTUFBQSxFQUFRLENBQUMsUUFBRCxDQUFWO0FBQUEsWUFBc0JDLE9BQUEsRUFBUyxDQUFDLE1BQUQsQ0FBL0I7QUFBQSxTQUFqQjtBQUFBLEtBQTlDLENBSGIsRUFJSUMsTUFBQSxHQUFTLE1BSmIsRUFLSUMsS0FBQSxHQUFRLE9BTFo7QUFNQUwsTUFBQSxDQUFPUixLQUFBLENBQUFKLEtBQUEsQ0FBQUksS0FBQSxDQUFBUixLQUFBLENBQUFvQixNQUFBO0FBQUEsSUFBQUUsT0FBQTtBQUFBLElBQUFDLFFBQUE7QUFBQSxJQUFBQyxJQUFBO0FBQUEsRUFBUCxFQU5BO0FBT0FSLE1BQUEsQ0FBT1MsTUFBUCxDQUFjaEIsS0FBQSxDQUFBTCxLQUFBLENBQUFLLEtBQUEsQ0FBQVQsS0FBQSxDQUFBcUIsS0FBQTtBQUFBLElBQUFDLE9BQUE7QUFBQSxJQUFBQyxRQUFBO0FBQUEsSUFBQUMsSUFBQTtBQUFBLEVBQWQsRUFQQTtBQVFBUixNQUFBLENBQU9VLElBQVAsQ0FBWWhCLEtBQUEsQ0FBQU4sS0FBQSxDQUFBTSxLQUFBLENBQUFWLEtBQUEsQ0FBQW9CLE1BQUE7QUFBQSxJQUFBRSxPQUFBO0FBQUEsSUFBQUMsUUFBQTtBQUFBLElBQUFDLElBQUE7QUFBQSxFQUFaLEVBQW9CYixLQUFBLENBQUFQLEtBQUEsQ0FBQU8sS0FBQSxDQUFBWCxLQUFBLENBQUFxQixLQUFBO0FBQUEsSUFBQUMsT0FBQTtBQUFBLElBQUFDLFFBQUE7QUFBQSxJQUFBQyxJQUFBO0FBQUEsRUFBcEIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZW1wb3dlciA9IHJlcXVpcmUoJ2VtcG93ZXInKSxcbiAgICBmb3JtYXR0ZXIgPSByZXF1aXJlKCdwb3dlci1hc3NlcnQtZm9ybWF0dGVyJyksXG4gICAgYnVzdGVyQXNzZXJ0aW9ucyA9IHJlcXVpcmUoXCJidXN0ZXItYXNzZXJ0aW9uc1wiKSxcbiAgICByZWZ1dGUgPSBlbXBvd2VyKGJ1c3RlckFzc2VydGlvbnMucmVmdXRlLCBmb3JtYXR0ZXIoKSwgeyB0YXJnZXRNZXRob2RzOiB7IG9uZUFyZzogWydpc051bGwnXSwgdHdvQXJnczogWydzYW1lJ10gfSB9KSxcbiAgICB0cnV0aHkgPSAndHJ1ZScsXG4gICAgZmFsc3kgPSAnZmFsc2UnO1xucmVmdXRlKHRydXRoeSk7XG5yZWZ1dGUuaXNOdWxsKGZhbHN5KTtcbnJlZnV0ZS5zYW1lKHRydXRoeSwgZmFsc3kpO1xuIl19
